import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
    name: "orders",
    initialState: { list: [] },
    reducers: {
        placeOrder(state, action) {
            state.list.push({
                id: Date.now(),
                items: action.payload,
                createdAt: new Date().toLocaleString("vi-VN"),
            });
        },
    },
});

export const { placeOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
