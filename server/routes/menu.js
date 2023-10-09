import express from "express";

import { getMenu } from "../controllers/menuController.js";

const router = express.Router();

router.get('/menu', getMenu);

export default router;