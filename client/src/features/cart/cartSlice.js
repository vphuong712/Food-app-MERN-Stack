import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: false,
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
        addItemToCart: (state, action) => {
            const productIndex = state.products.findIndex((product) => product.id === action.payload.id);
            if(state.products[productIndex]) {
                const oldQuantity = state.products[productIndex].quantity;
                const oldPrice = state.products[productIndex].price;
                const newQuantity = oldQuantity + action.payload.quantity;
                const newPrice = oldPrice + action.payload.price;
                if(newQuantity > 5) {
                    return;
                }
                state.products[productIndex].quantity = newQuantity; 
                state.products[productIndex].price = newPrice ;
            } else {
                state.products.push(action.payload);
            }
        },
        reduceItemFromCart: (state, action) => {
            const productIndex = state.products.findIndex((product) => product.id === action.payload.id);
            if(state.products[productIndex]) {
                const oldQuantity = state.products[productIndex].quantity;
                const newQuantity = oldQuantity - action.payload.quantity;
                if(newQuantity <= 0) {
                    state.products.splice(productIndex, 1);
                    return;
                }
                const oldPrice = state.products[productIndex].price;
                const newPrice = oldPrice - action.payload.price;
                state.products[productIndex].quantity = newQuantity; 
                state.products[productIndex].price = newPrice ;
            } 
        }
    }
})

export const { showing, hide, addItemToCart, reduceItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;