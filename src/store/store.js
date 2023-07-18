import { configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "./authentication/authSlice";
import { platformSlice } from "./platform/platformSlice";

export const store = configureStore({
  reducer: {
    authentication: authenticationSlice.reducer,
    platform: platformSlice.reducer,
  }
});