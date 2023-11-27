import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
    userId : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    orderItems: [
        {
            foodId: { type: Schema.Types.ObjectId, ref: 'Menu', required: true },
            quantity: { type: Number, required: true}
        }
    ],
    totalPrice: { type: Number, required: true},
    status: {
        type: String,
        required: true
    }
})

export default mongoose.model('Order', schema);