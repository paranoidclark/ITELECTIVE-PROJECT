import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload
            const existingItem = state.cartItems.find(newItem => newItem.id === newItem.id)

            state.totalQuantity++

            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    name: newItem.name,
                    image: newItem.imgurl,
                    price: newItem.price,
                    quantity: 1,
                    total: newItem.price
                })
            } else {
                existingItem.quantity++
                existingItem.total = Number(existingItem.total) + Number(newItem.price)
            }

            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity))
        }
    }
});

export const cartActions = cartSlice.actions

export default cartSlice.reducer