import { Router } from "express";
import * as veterinaria from "../controllers/veterinaria.controller.js";

export const veterinariasRouter = Router();

veterinariasRouter.post("/", veterinaria.create )
veterinariasRouter.get("/", veterinaria.getAll )
veterinariasRouter.delete("/:id", veterinaria.remove )
veterinariasRouter.put("/:id", veterinaria.update )