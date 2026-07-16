import { createSlice } from "@reduxjs/toolkit";

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

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
