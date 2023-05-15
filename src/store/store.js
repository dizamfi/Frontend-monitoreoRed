import { configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "./authentication/authSlice";

export const store = configureStore({
  reducer: {
    authentication: authenticationSlice.reducer,
  }
});