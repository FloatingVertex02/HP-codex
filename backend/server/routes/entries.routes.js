import { Router } from "express";
import { getEntries, getFilteredList, getSearch } from "../controllers/entries.controller.js";

const router = Router();
router.get('/', getEntries);
router.get('/category/:category', getFilteredList);
router.get('/search/:search', getSearch);

export default router