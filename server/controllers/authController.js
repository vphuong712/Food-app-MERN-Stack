import User from '../models/user.js';
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';

export const signup = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        const error = new Error('Validation failed.');
        error.status = 422;
        error.data = errors.array();
        res.status(error.status).json( { error: error.message, data: error.data } );
    }

    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phoneNumber = req.body.phoneNumber;
    const address = req.body.address;
    const password = req.body.password;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const user = new User({
            email: email,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            address: address,
            password: hashPassword,
        })
        await user.save();
        res.status(201).json({ message: 'User created!', userId: user._id })
        
    } catch (error) {
        
    }
    
}
