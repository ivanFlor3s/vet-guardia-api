import { Router } from "express";
import { crearVeterinaria } from "../controllers/veterinaria.controller.js";

export const veterinariasRouter = Router();

veterinariasRouter.post("/", crearVeterinaria )
// router.post("/", createUser )