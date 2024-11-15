import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slices/AuthSlice.ts";

export const store = configureStore({
    reducer: {
        auth: authSlice
    }
})
export type AppDispatch = typeof store.dispatch;