import { createSlice } from '@reduxjs/toolkit'

// ---- 1. AUTH SLICE ----
const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null },
  reducers: {
    login(state, action) {
      state.user = { name: action.payload, id: Date.now() }
    },
    logout(state) {
      state.user = null
    },
  },
})

// ---- 2. PRODUCTS SLICE ----
const MOCK_PRODUCTS = [
  { id: 1, name: 'Bàn phím cơ', price: 890000 },
  { id: 2, name: 'Chuột không dây', price: 350000 },
  { id: 3, name: 'Tai nghe Bluetooth', price: 590000 },
  { id: 4, name: 'Màn hình 24 inch', price: 2990000 },
]
const productsSlice = createSlice({
  name: 'products',
  initialState: { items: MOCK_PRODUCTS },
  reducers: {}, // dữ liệu tĩnh, không cần reducer cho bài học đơn giản
})

// ---- 3. CART SLICE ----
const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] }, // { productId, qty }
  reducers: {
    addToCart(state, action) {
      const existing = state.items.find((i) => i.productId === action.payload)
      if (existing) existing.qty += 1
      else state.items.push({ productId: action.payload, qty: 1 })
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((i) => i.productId !== action.payload)
    },
    changeQty(state, action) {
      const { productId, qty } = action.payload
      const item = state.items.find((i) => i.productId === productId)
      if (item) item.qty = Math.max(1, qty)
    },
    clearCart(state) {
      state.items = []
    },
  },
})

// ---- 4. ORDERS SLICE ----
const ordersSlice = createSlice({
  name: 'orders',
  initialState: { list: [] },
  reducers: {
    placeOrder(state, action) {
      state.list.push({
        id: Date.now(),
        items: action.payload,
        createdAt: new Date().toLocaleString('vi-VN'),
      })
    },
  },
})

export const { login, logout } = authSlice.actions
export const { addToCart, removeFromCart, changeQty, clearCart } = cartSlice.actions
export const { placeOrder } = ordersSlice.actions

export const authReducer = authSlice.reducer
export const productsReducer = productsSlice.reducer
export const cartReducer = cartSlice.reducer
export const ordersReducer = ordersSlice.reducer