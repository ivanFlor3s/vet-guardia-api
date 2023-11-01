import express from "express";


import { router } from "./src/routes/users";

const app = express();

app.use(express.json());
app.use('/api/v1/users', router );

app.listen(3000, ()=>{
  console.log("Server running at http://localhost:3000/");
});

