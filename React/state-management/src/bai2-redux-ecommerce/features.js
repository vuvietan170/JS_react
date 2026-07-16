import { createSlice } from "@reduxjs/toolkit";
// xac thuc nguoi dung
const authSlice = createSlice({
    name: "auth",
    initialState: { user: null },
    reducers: {
        login(state, action) {
            state.user = { name: action.payload, id: Date.now() };
        },
        logout(state) {
            state.user = null;
        },
    },
});
//product slice
const productSlice = createSlice({
    name: "products",
    initialState: { items: [] },
    reducers: {}, // du lieu tinh (ko thay doi, chua can dung vi day chi la vi du don gian)
});
const cartSlice = createSlice({
    name: "cart",
    initialState: { items: [] }, // productId,qty
    reducers: {
        addToCart(state, action) {
            const existing = state.items.find(
                (i) => i.productId === action.payload,
            );
            if (existing) {
                existing.qty += 1;
            } else {
                state.items.push({ productId: action.payload, qty: 1 });
            }
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
//order slice
const orderSlice = createSlice({
    name: "orders",
    initialState: { list: [] },
    reducers: {
        placeOrder(state, action) {
            state.list.push({
                id: Date.now(),
                items: action.payload,
                createdAt: new Date().toLocaleString("en-US"),
            });
        },
    },
});
// tao slice de export cac action va reducer

//tao action
export const { login, logout } = authSlice.actions;
export const { addToCart, removeFromCart, changeQty, clearCart } =
    cartSlice.actions;
export const { placeOrder } = orderSlice.actions;

//State se thay doi khi nhan mot action
export const authReducer = authSlice.reducer;
export const productReducer = productSlice.reducer;
export const orderReducer = orderSlice.reducer;
export const cartReducer = cartSlice.reducer;
