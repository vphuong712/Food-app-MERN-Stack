import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getAuthToken } from '../../util/auth';


const initialState = {
    show: false,
    status: 'idle',
    products: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        showing: (state) => {
            state.show = true
        },
        hide: (state) => {
            state.show = false
        },
    },
    extraReducers: builder => {
        builder
        .addCase(getItemsFromCart.fulfilled, (state, action) => {
            state.products = action.payload;
            state.status = 'idle';
        })
        .addCase(addItemToCart.fulfilled, (state, action) => {
            const productIndex = state.products.findIndex((product) => product.id === action.payload.id);
            if(state.products[productIndex]) {
                const newQuantity =  action.payload.quantity;
                state.products[productIndex].quantity = newQuantity;
                state.status = 'idle';
            } else {
                state.products.push(action.payload);
                state.status = 'idle';
            }
        })
        .addCase(reduceItemFromCart.fulfilled, (state, action) => {
            const productIndex = state.products.findIndex((product) => product.id === action.payload.id);
            if(state.products[productIndex]) {
                const newQuantity =  action.payload.quantity;
                if(newQuantity <= 0) {
                    state.products.splice(productIndex, 1);
                    state.status = 'idle';
                    return;
                }
                state.products[productIndex].quantity = newQuantity;
                state.status = 'idle';
            }
        })
    }
})

export const { showing, hide } = cartSlice.actions;

export const getItemsFromCart = createAsyncThunk('items/getItemsFromCart', async () => {
    const token = getAuthToken();
    const userId = localStorage.getItem('userId');

    if(token !== 'EXPIRED' && userId) {
        const response = await axios.get(`http://localhost:8080/user/${userId}/cart`, {
            headers: {'Authorization': 'Bearer ' + token}
        })
        const foods = response.data.map(food => {
            return {
                id: food.foodId._id,
                image: food.foodId.imageUrl,
                title: food.foodId.title,
                price: food.foodId.price,
                quantity: food.quantity
            }
        });
        return foods;
    }
    return [];
})

export const addItemToCart = createAsyncThunk('items/addItemsToCart', async (item) => {
    const token = getAuthToken();
    const userId = localStorage.getItem('userId');
    if(token && userId) {
        const response = await axios.post(`http://localhost:8080/user/${userId}/cart`, item, {
            headers: {'Authorization': 'Bearer ' + token}
        })

        const data = response.data;

        const food = {
            id: data.foodId._id,
            image: data.foodId.imageUrl,
            title: data.foodId.title,
            price: data.foodId.price,
            quantity: data.quantity
        }
        return food;
    }
})

export const reduceItemFromCart = createAsyncThunk('items/reduceItemsFromCart', async (item) => {
    const token = getAuthToken();
    const userId = localStorage.getItem('userId');
    if(token && userId) {
        const response = await axios.patch(`http://localhost:8080/user/${userId}/cart`, item, {
            headers: {'Authorization': 'Bearer ' + token}
        })

        const data = response.data;

        const food = {
            id: data.foodId._id,
            image: data.foodId.imageUrl,
            title: data.foodId.title,
            price: data.foodId.price,
            quantity: data.quantity
        }
        return food;
    }
})

export default cartSlice.reducer;