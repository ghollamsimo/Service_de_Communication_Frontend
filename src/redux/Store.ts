import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slices/AuthSlice.ts";
import friendSlice from "./slices/FriendSlice.ts";
import channelSlice from './slices/ChannelSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        friend: friendSlice,
        channel:channelSlice
    }
})
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;