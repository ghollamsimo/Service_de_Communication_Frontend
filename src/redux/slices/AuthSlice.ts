import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService.ts";
import { initialState } from "../initialisation.ts";

export const register = createAsyncThunk(
    "auth/register",
    async ({ name, email, password, phone }: { name: string; email: string; password: string; phone: number }, { rejectWithValue }) => {
        try {
            const response = await AuthService.register({ name, email, password, phone});
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeStateTrue: (state) => {
            state.updateState = true;
        },
        changeStateFalse: (state) => {
            state.updateState = false;
        },
        clearResponse: (state) => {
            state.response = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.loading = true;
            })
            .addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.dataObj = action.payload;
                state.errorMessage = null;
            })
            .addCase(register.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.errorMessage = action.payload || "Registration failed";
            })
    }
})

export default authSlice.reducer;