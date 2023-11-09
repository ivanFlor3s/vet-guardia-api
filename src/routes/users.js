import { Router } from "express";
import { getUserId, getUsers } from "../controllers/users.controller.js";

export const router = Router();

router.get("/", getUsers);
router.get("/getById", getUserId)
// router.post("/", createUser )