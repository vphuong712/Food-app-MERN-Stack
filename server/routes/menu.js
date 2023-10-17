import express from "express";

import { getMenu, getFoodById, createFood, updateFood, deleteFood } from "../controllers/menuController.js";

const router = express.Router();

router.get('/menu', getMenu);

router.delete('/menu', deleteFood);

router.get('/menu/:foodId', getFoodById);

router.put('/menu/:foodId', updateFood);

router.post('/menu', createFood);


export default router;