import {createAsyncThunk} from "@reduxjs/toolkit";
import FriendService from "../../services/FriendService.ts";

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