import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors'

import { router } from "./src/routes/users.js";
import { sequelize } from "./src/db/config.js";

import { configRelations } from "./src/models/relations.js";
import { veterinariasRouter } from "./src/routes/veterinarias.js";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', router );
app.use('/api/v1/veterinarias', veterinariasRouter);

//TODO agregar midleware para manejar errores     

configRelations();

await sequelize.sync({ force: false })

.then(() => {
  console.log('Database connected');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

app.listen(3000, ()=>{
  console.log("Server running at http://localhost:3000/");
});


