import User from '../models/user.js';
import { query, validationResult } from 'express-validator';


export const getUser = async (req, res) => {
    const id = req.userId;
    try {
        const user = await User.findById(id);
        res.status(200).json({
            userId: user._id.toString(),
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            address: user.address
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateUser = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        const error = new Error('Update failed.');
        error.status = 422;
        error.data = errors.array();
        res.status(error.status).json( { message: error.message, data: error.data } );
        return;
    }
    const id = req.userId;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const phoneNumber = req.body.phoneNumber;

    try {
        const user = await User.findById(id);
        if(!user) {
            const error = new Error('User does not exist.');
            error.statusCode = 404;
            res.status(404).json(error);
            throw error;
        }
        user.firstName = firstName;
        user.lastName = lastName;
        user.address = address;
        user.phoneNumber = phoneNumber;
        await user.save();
        res.status(200).json({ message: 'Success!', user: {
            userId: user._id.toString(),
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            address: user.address,
            phoneNumber: user.phoneNumber
        } });
    } catch (error) {
        res.status(error.status).json(error);
    }   
};

export const getCart = async (req, res) => {
    const id = req.userId;
    try {
        const user = await User.findById(id).populate("cart.items.foodId");
        res.status(200).json(user.cart.items);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const postCart = async (req, res) => {
    const userId = req.userId;
    const foodId = req.body.id;
    const quantity = req.body.quantity;
    try {
        const user = await User.findById(userId);
        const indexItem = user.cart.items.findIndex(item => item.foodId.toString() === foodId);
        if(indexItem !== -1) {
            const item = user.cart.items[indexItem]
            item.quantity = item.quantity + quantity;
            await user.save();
            const query = await User.findById(userId).populate(`cart.items.${indexItem}.foodId`)
            res.status(200).json(query.cart.items[indexItem]);
        } else {
            user.cart.items.push({ foodId: foodId, quantity: quantity})
            await user.save();
            const indexItem = user.cart.items.findIndex(item => item.foodId.toString() === foodId);
            const query = await User.findById(userId).populate(`cart.items.${indexItem}.foodId`)
            res.status(200).json(query.cart.items[indexItem]);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

export const reduceItemFromCart = async (req, res) => {
    const userId = req.userId;
    const foodId = req.body.id;
    const quantity = req.body.quantity;
    try {
        const user = await User.findById(userId);
        const indexItem = user.cart.items.findIndex(item => item.foodId.toString() === foodId);
        if(indexItem !== -1) {
            const item = user.cart.items[indexItem]
            item.quantity = item.quantity - quantity;
            await user.save();
            const query = await User.findById(userId).populate(`cart.items.${indexItem}.foodId`)
            const food = query.cart.items[indexItem];
            if(query.cart.items[indexItem].quantity <= 0) {
                query.cart.items.splice(indexItem, 1);
                await query.save();
            };
            res.status(200).json(food);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

