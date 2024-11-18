import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slices/AuthSlice.ts";
import friendSlice from "./slices/FriendSlice.ts";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        friend: friendSlice
    }
})
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;