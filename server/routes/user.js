import express from 'express';
import {
    getUser,
    updateUser,
    getCart,
    postCart,
    reduceItemFromCart,
    resetPassword,
    postOrder,
    getOrder
} from '../controllers/userController.js';
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

router.put('/user/:userId/reset-password',[
    body('currentPassword').trim().isLength({ min: 8 }).not().isEmpty().withMessage('Please enter current password'),
    body('newPassword').trim().isLength({ min: 8 }).not().isEmpty().withMessage('Please enter new password'),
    body('confirmPassword').trim().isLength({ min: 8 }).custom((value, { req }) => {
        if (value !== req.body.newPassword) {
          throw new Error('Password confirmation does not match password');
        }
        return true;
    }).not().isEmpty().withMessage('Please enter confirm password')
], isAuth, resetPassword);

router.get('/user/:userId/cart', isAuth, getCart);

router.post('/user/:userId/cart', isAuth, postCart);

router.patch('/user/:userId/cart', isAuth, reduceItemFromCart);

router.post('/user/:userId/order', [
    body('receiver').trim().isLength({ max: 50 }).not().isEmpty().withMessage('Please enter receiver name.'),
    body('address').trim().isLength({ max: 50 }).not().isEmpty().withMessage('Please enter address.'),
    body('phoneNumber').isLength({ max: 11 }).isMobilePhone().withMessage('Please enter a valid phone number.')
], isAuth, postOrder);

router.get('/user/:userId/order-status', isAuth, getOrder);


export default router;