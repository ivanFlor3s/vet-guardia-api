import { Router } from "express";
import * as reviewController from "../controllers/review.controller.js";
import { validarJwt } from "../middlewares/validate-jwt.js";

export const reviewsRouter = Router();

reviewsRouter.post("/:idVeterinaria", [validarJwt] , reviewController.create )


