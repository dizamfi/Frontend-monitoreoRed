import monitoreoApi from "../../helpers/monitoreoApi";
import { onRegistroNmap } from "./platformSlice";

export const registrosNmap = () => {
  return async (dispatch) => {
    try {
      const { data } = await monitoreoApi.get("/network/nmap");

      dispatch(
        onRegistroNmap({...data}),
      );
    } catch (error) {
      console.log("Error");
      console.log(error.response.data);
    }
  };
};
