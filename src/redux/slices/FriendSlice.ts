import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import FriendService from "../../services/FriendService.ts";
import {initialState} from "../initialisation.ts";

export const getFriends = createAsyncThunk(
    "friends/getFriends",
    async (_, { rejectWithValue }) => {
        try {
            const response = await FriendService.getFriends();
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)


const friendSlice = createSlice({
    name: 'friend',
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
            .addCase(getFriends.pending, (state) => {
                state.loading = true;
            })
            .addCase(getFriends.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.datalist = action.payload;
                state.errorMessage = null;
            })
            .addCase(getFriends.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.errorMessage = action.payload || "Friends are rejected";
            })

    }
})

export default friendSlice.reducer;