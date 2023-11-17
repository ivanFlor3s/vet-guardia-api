import { Router } from "express";
import * as veterinaria from "../controllers/veterinaria.controller.js";
import {validarJwt} from "../middlewares/validate-jwt.js"
export const veterinariasRouter = Router();

veterinariasRouter.post("/", veterinaria.create )
veterinariasRouter.get("/", veterinaria.getAll )
veterinariasRouter.delete("/:id",[validarJwt], veterinaria.remove )
veterinariasRouter.put("/:id", veterinaria.update )