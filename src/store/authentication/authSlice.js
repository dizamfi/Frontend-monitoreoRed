import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    estado: "checking",
    usuario: {},
    errorMessage: undefined,
  },
  reducers: {
    checkingCredentials: (state) => {
      state.estado = "checking";
    },

    login: (state, { payload }) => {
      state.estado = "authenticated";
      state.usuario = payload;
      state.errorMessage = undefined;
    },

    logout: (state, { payload }) => {
      state.estado = "no-authenticated";
      state.usuario = {};
      state.errorMessage = payload;
    },
  },
});

export const { checkingCredentials, logout, login } =
  authenticationSlice.actions;
