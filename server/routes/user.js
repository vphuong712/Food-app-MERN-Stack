import express from 'express';
import { getUser, updateUser, getCart, postCart, reduceItemFromCart } from '../controllers/userController.js';
import { body } from 'express-validator';
import isAuth from '../middlewares/is-auth.js';

const router = express.Router();

router.get('/user/:userId', isAuth, getUser);

router.put('/user/:userId', [
    body('firstName').trim().isLength({ max: 50 }).not().isEmpty().withMessage('Please enter first name.'),
    body('lastName').trim().isLength({ max: 50 }).not().isEmpty().withMessage('Please enter last name.'),
    body('address').trim().isLength({ max: 50 }).not().isEmpty().withMessage('Please enter address.'),
    body('phoneNumber').isLength({ max: 11 }).isMobilePhone().withMessage('Please enter a valid phone number.')
], isAuth, updateUser);

router.get('/user/:userId/cart', isAuth, getCart);

router.post('/user/:userId/cart', isAuth, postCart);

router.patch('/user/:userId/cart', isAuth, reduceItemFromCart);


export default router;