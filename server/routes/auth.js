import express from 'express';
import { body } from 'express-validator';
import { signup, login } from '../controllers/authController.js';


const router = express.Router();

router.put('/signup', [
    body('email').isEmail().withMessage('Please enter a valid email.').normalizeEmail(),
    body('password').trim().isLength({ min: 8 }),
    body('firstName').trim().isLength({ max: 50 }).not().isEmpty().withMessage('Please enter first name.'),
    body('lastName').trim().isLength({ max: 50 }).not().isEmpty().withMessage('Please enter last name.'),
    body('address').trim().isLength({ max: 50 }).not().isEmpty().withMessage('Please enter address.'),
    body('phoneNumber').isLength({ max: 11 }).isMobilePhone().withMessage('Please enter a valid phone number.')
], signup);

router.post('/login', login);

export default router;