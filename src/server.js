import express from 'express';
import cors from 'cors';


import { sequelize } from './config/config-db.js';
import { configRelations } from './models/relations.js';


//ROUTES
import { veterinariasRouter } from './routes/veterinarias.router.js';
import { router } from './routes/users.router.js';

const BASE_API_URL= '/api/v1';

export class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT_SERVER;

        this.routes = {
            users: `${BASE_API_URL}/users`,
            veterinarias: `${BASE_API_URL}/veterinarias`,
        };

        //Connect to db
        this.conectDb();

        //MIDLEWARES
        this.middlewares();

        //RUTAS
        this.configRoutes();
    }

    //Metodo que configura mis rutas
    configRoutes() {
        this.app.use(this.routes.users, router);
        this.app.use(this.routes.veterinarias, veterinariasRouter);
    }

    async conectDb() {
        try {
            await sequelize.authenticate();

            configRelations();

            await sequelize.sync({ force: false })
            console.log('Connected to database')
        } catch (error) {
            console.error('Unable to connect to the database');
            throw error;
        }
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        // Lectura y parse del body
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening at http://localhost:${this.port}`);
        });
    }
}

