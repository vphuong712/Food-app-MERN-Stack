import express from 'express';
import { getUser } from '../controllers/userController.js';
import isAuth from '../middlewares/is-auth.js';

const router = express.Router();

router.get('/user/:userId', isAuth, getUser);

export default router;