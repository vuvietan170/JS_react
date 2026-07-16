import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { items: [] }, // { productId, qty }
    reducers: {
        addToCart(state, action) {
            const existing = state.items.find(
                (i) => i.productId === action.payload,
            );
            if (existing) existing.qty += 1;
            else state.items.push({ productId: action.payload, qty: 1 });
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(
                (i) => i.productId !== action.payload,
            );
        },
        changeQty(state, action) {
            const { productId, qty } = action.payload;
            const item = state.items.find((i) => i.productId === productId);
            if (item) item.qty = Math.max(1, qty);
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, changeQty, clearCart } =
    cartSlice.actions;
export default cartSlice.reducer;
