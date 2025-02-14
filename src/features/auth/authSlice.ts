import { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";
import { RootOptions } from "react-dom/client";

interface AuthState {
    username: string | null;
}

const initialState: AuthState = {
    username: null
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLoggedIn(state, action: PayloadAction<string>) {
            state.username =action.payload
        },
        userLoggedOut(state) {
            state.username = null;
        }
    }
})

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUsername = (state:RootState)=>state.auth.username
