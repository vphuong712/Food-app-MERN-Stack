import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: false,
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
        }
    }
})

export const { showing, hide } = cartSlice.actions;
export default cartSlice.reducer;