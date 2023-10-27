import express from "express";

import { getMenu, getFoodById, createFood, updateFood, deleteFood } from "../controllers/menuController.js";
import isAuth from "../middlewares/is-auth.js";

const router = express.Router();

router.get('/menu', getMenu);

router.delete('/menu', isAuth, deleteFood);

router.get('/menu/:foodId', getFoodById);

router.put('/menu/:foodId', isAuth, updateFood);

router.post('/menu', isAuth, createFood);


export default router;