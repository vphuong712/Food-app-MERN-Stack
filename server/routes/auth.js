import express from 'express';
import { body } from 'express-validator';
import { signup } from '../controllers/authController.js';


const router = express.Router();

router.put('/signup', [
    body('email').isEmail().withMessage('Please enter a valid email.').normalizeEmail(),
    body('password').trim().isLength({ min: 6 }),
    body('firstName').trim().not().isEmpty(),
    body('lastName').trim().not().isEmpty(),
    body('address').trim().not().isEmpty(),
    body('phoneNumber').isMobilePhone().withMessage('Please enter a phone number.')
], signup);

export default router;