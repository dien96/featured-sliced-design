import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocalStorage } from "../lib";
import type { UserState } from "./types";
import { checkAuth, login, logout } from "./thunks";


const initialState: UserState = {
    isLoading: false,
    user: getUserFromLocalStorage(),
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        }).addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        }).addCase(login.rejected, (state) => {
            state.isLoading = false;
            state.user = null;
        }).addCase(logout.fulfilled, (state) => {
            state.isLoading = false;
            state.user = null;
        }).addCase(checkAuth.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload.user;
        }).addCase(checkAuth.rejected, (state) => {
            state.isLoading = false;
            state.user = null;
        })
    },
})

export default userSlice.reducer;