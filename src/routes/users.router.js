import { Router } from "express";
import * as UserController from "../controllers/users.controller.js";

export const router = Router();

router.post('/', UserController.create)
// router.post("/", createUser )