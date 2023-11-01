import { Router } from "express";
import { getUserId, getUsers } from "../controllers/users.controller";

export const router = Router();

router.get("/", getUsers);
router.get("/getById", getUserId)