import { configureStore } from '@reduxjs/toolkit'
import addProductFormReducer from '../features/modals/addProductFormSlice';
import cartReducer from '../features/cart/cartSlice';


const store = configureStore({
  reducer: {
    addProduct: addProductFormReducer,
    cart: cartReducer,
  },
})

export default store;