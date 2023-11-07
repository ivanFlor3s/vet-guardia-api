import express from "express";
import * as dotenv from 'dotenv';

import { sequelize } from "./src/db/config.js";
import { router } from "./src/routes/users.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api/v1/users', router );

app.listen(3000, ()=>{
  console.log("Server running at http://localhost:3000/");
});

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});