import { createSlice } from "@reduxjs/toolkit";

export const platformSlice = createSlice({
  name: "platform",
  initialState: {
    isLoadingRegistros: true,
    settings: "SNMP y SSH",
    settingsDefect: "",
    devicesConnected: [],
    TxRxByMac: [],
    stateInterfaces: [],
    txPktsByInterfaces: [],
    traffic: [],
    ports: [],
    frecuency: [],
    pktsTotal: [],
    totalDevices: 0,
    totalDevicesSnmp: 0,
  },
  reducers: {
    onDevicesConnected: (state, { payload }) => {
      (state.isLoadingRegistros = false), state.devicesConnected.push(payload);
    },

    onTxRxByMac: (state, { payload }) => {
      (state.isLoadingRegistros = false), state.TxRxByMac.push(payload);
    },

    onStateInterfaces: (state, { payload }) => {
      (state.isLoadingRegistros = false), state.stateInterfaces.push(payload);
    },

    onTxPktsByInterfaces: (state, { payload }) => {
      (state.isLoadingRegistros = false),
        state.txPktsByInterfaces.push(payload);
    },

    onTraffic: (state, { payload }) => {
      (state.isLoadingRegistros = false), state.traffic.push(payload);
    },

    onPorts: (state, { payload }) => {
      (state.isLoadingRegistros = false), state.ports.push(payload);
    },

    onSettings: (state, { payload }) => {
      state.settings = payload;
    },

    onSettingsDefect: (state, { payload }) => {
      state.settingsDefect = payload;
    },

    onFrecuency: (state, { payload }) => {
      (state.isLoadingRegistros = false), state.frecuency.push(payload);
    },

    onPktsTotal: (state, { payload }) => {
      (state.isLoadingRegistros = false), state.pktsTotal.push(payload);
    },
    onTotalDevices: (state, { payload }) => {
      state.totalDevices = payload;
    },

    onTotalDevicesSnmp: (state, { payload }) => {
      state.totalDevicesSnmp = payload;
    },
  },
});

export const {
  onDevicesConnected,
  onTxRxByMac,
  onStateInterfaces,
  onTxPktsByInterfaces,
  onTraffic,
  onPorts,
  onSettings,
  onFrecuency,
  onPktsTotal,
  onSettingsDefect,
  onTotalDevices,
  onTotalDevicesSnmp,
} = platformSlice.actions;
