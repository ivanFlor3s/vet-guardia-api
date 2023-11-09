import express from "express";
import * as dotenv from 'dotenv';

import { router } from "./src/routes/users.js";
import { sequelize } from "./src/db/config.js";

import { User } from "./src/models/user.js";


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/users', router );

//TODO agregar midleware para manejar errores     

await sequelize.sync({ force: false })
.then(() => {
  console.log('Database connected');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

app.listen(3000, ()=>{
  console.log("Server running at http://localhost:3000/");
});


