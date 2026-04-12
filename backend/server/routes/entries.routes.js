import { Router } from "express";
import { getEntries, getEntryById, getFilteredList, getSearch } from "../controllers/entries.controller.js";

const router = Router();
router.get('/', getEntries);
router.get('/category/:category', getFilteredList);
router.get('/search/:search', getSearch);
router.get('/:id', getEntryById);

export default router