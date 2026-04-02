import { Router } from "express";
import { getEntires } from "../controllers/entries.controller.js";

const router = Router();
router.get('/', getEntires);

export default router