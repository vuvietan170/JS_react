import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice.js";
import productsReducer from "./features/productsSlice.js";
import cartReducer from "./features/cartSlice.js";
import ordersReducer from "./features/ordersSlice.js";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productsReducer,
        cart: cartReducer,
        orders: ordersReducer,
    },
});
