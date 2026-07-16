import { configureStore } from "@reduxjs/toolkit";
import {
    authReducer,
    cartReducer,
    productReducer,
    orderReducer,
} from "./features";

// configureStore gop  reducer
// dispatch(addToCart(product)) -> nhan action addToCart gui ,xu ly va gui du lieu
export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        cart: cartReducer,
        orders: orderReducer,
    },
});
