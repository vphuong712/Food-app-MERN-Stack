import express from "express";

import { getMenu, getFoodById, createFood } from "../controllers/menuController.js";

const router = express.Router();

router.get('/menu', getMenu);

router.get('/menu/:foodId', getFoodById);

router.post('/menu', createFood);

export default router;