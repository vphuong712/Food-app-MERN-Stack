import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: false,
}

const addProductFormSlice = createSlice({
    name: 'add-product-form',
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

export const { showing, hide } = addProductFormSlice.actions
export default addProductFormSlice.reducer 