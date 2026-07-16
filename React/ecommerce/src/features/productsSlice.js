import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts as fetchProductsApi } from "../api/productsApi.js";

// Thunk bất đồng bộ gọi tới "api/productsApi.js"
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const data = await fetchProductsApi();
        return data;
    },
);

const productsSlice = createSlice({
    name: "products",
    initialState: { items: [], status: "idle" }, // status: idle | loading | succeeded | failed
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export default productsSlice.reducer;
