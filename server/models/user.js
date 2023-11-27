import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cart: {
        items: [
            {
                foodId: { type: Schema.Types.ObjectId, ref: 'Menu', required: true },
                quantity: { type: Number, required: true}
            }
        ]
    },
});

export default mongoose.model('User', schema);