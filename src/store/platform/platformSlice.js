import { createSlice } from "@reduxjs/toolkit";

export const platformSlice = createSlice({
  name: "platform",
  initialState: {
    isLoadingRegistros: true,
    registros: [],
  },
  reducers: {
    onRegistroNmap: (state, { payload }) => {
      state.isLoadingRegistros = false,
      state.registros.push(payload);
    }
    
  },
});

export const { onRegistroNmap } =
  platformSlice.actions;
