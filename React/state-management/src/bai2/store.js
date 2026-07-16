import { configureStore } from '@reduxjs/toolkit'
import { authReducer, productsReducer, cartReducer, ordersReducer } from './features.js'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer,
  },
})