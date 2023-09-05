import monitoreoApi from "../../helpers/monitoreoApi";
import {
  onDevicesConnected,
  onTxRxByMac,
  onStateInterfaces,
  onTxPktsByInterfaces,
  onTraffic,
  onPorts,
  onFrecuency,
  onPktsTotal,
  onTotalDevices,
  onTotalDevicesSnmp,
} from "./platformSlice";


export const registrosDevicesConnected = () => {
  return async (dispatch) => {
    try {
      const { data } = await monitoreoApi.get("/network/infoDevices");

      dispatch(onDevicesConnected({ ...data }));
    } catch (error) {
      console.log("Error");
      console.log(error.response.data);
    }
  };
};

export const registrosTxRxByMac = () => {
  return async (dispatch) => {
    try {
      const { data } = await monitoreoApi.get("/network/txrxbymac");

      dispatch(onTxRxByMac({ ...data }));
    } catch (error) {
      console.log("Error");
      console.log(error.response.data);
    }
  };
};

export const registrosStateInterfaces = () => {
  return async (dispatch) => {
    try {
      const { data } = await monitoreoApi.get("/network/stateInterfaces");

      dispatch(onStateInterfaces({ ...data }));
    } catch (error) {
      console.log("Error");
      console.log(error.response.data);
    }
  };
};

export const registrosTxPktsByInterfaces = () => {
  return async (dispatch) => {
    try {
      const { data } = await monitoreoApi.get("/network/pktsbyinterface");

      dispatch(onTxPktsByInterfaces({ ...data }));
    } catch (error) {
      console.log("Error");
      console.log(error.response.data);
    }
  };
};

export const registrosTraffic = () => {
  return async (dispatch) => {
    try {
      const { data } = await monitoreoApi.get("/network/traffic");

      dispatch(onTraffic({ ...data }));
    } catch (error) {
      console.log("Error");
      console.log(error.response.data);
    }
  };
};

export const registrosPorts = () => {
  return async (dispatch) => {
    try {
      const { data } = await monitoreoApi.get("/network/ports");

      dispatch(onPorts({ ...data }));
    } catch (error) {
      console.log("Error");
      console.log(error.response.data);
    }
  };
};

export const registrosFrecuency = () => {
  return async (dispatch) => {
    try {
      const { data } = await monitoreoApi.get("/network/frecuency");

      dispatch(onFrecuency({ ...data }));
    } catch (error) {
      console.log("Error");
      console.log(error.response.data);
    }
  };
};

export const registrosPktsTotal = () => {
  return async (dispatch) => {
    try {
      const { data } = await monitoreoApi.get("/network/pktstotalWithSnmp");

      dispatch(onPktsTotal({ ...data }));
    } catch (error) {
      console.log("Error");
      console.log(error.response.data);
    }
  };
};

export const registrosTotalDevices = () => {
  return async (dispatch) => {
    try {
      const { data } = await monitoreoApi.get("/network/devicesConectedSSH");

      dispatch(onTotalDevices({ ...data }));
    } catch (error) {
      console.log("Error");
      console.log(error.response.data);
    }
  };
};

export const registrosTotalDevicesSnmp = () => {
  return async (dispatch) => {
    try {
      const { data } = await monitoreoApi.get("/network/devicesConectedSnmp");

      dispatch(onTotalDevicesSnmp({ ...data }));
    } catch (error) {
      console.log("Error");
      console.log(error.response.data);
    }
  };
};
