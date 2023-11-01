import express from "express";

import { getMenu, getFoodById, createFood, updateFood, deleteFood } from "../controllers/menuController.js";
import isAuth from "../middlewares/is-auth.js";
import isAdmin from "../middlewares/is-admin.js";

const router = express.Router();

router.get('/menu', getMenu);

router.delete('/menu/:foodId', isAuth, isAdmin, deleteFood);

router.get('/menu/:foodId', getFoodById);

router.put('/menu/:foodId', isAuth, isAdmin, updateFood);

router.post('/menu', isAuth, isAdmin, createFood);


export default router;