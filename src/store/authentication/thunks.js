import monitoreoApi from "../../helpers/monitoreoApi";
import { checkingCredentials, login, logout } from "./authSlice";

export const loginUser = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    try {
      const { data } = await monitoreoApi.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("initDate-token", new Date().getTime());
      dispatch(
        login({ name: data.name, lastName: data.lastName, uid: data.uid })
      );
    } catch (error) {
      dispatch(logout(error.response.data.message));
      console.log("Error");
      console.log(error.response.data);
    }
  };
};

export const registerUser = ({ name, lastName, email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    try {
      const { data } = await monitoreoApi.post("/auth/create", {
        name, lastName, email, password
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("initDate-token", new Date().getTime());
      dispatch(
        login({ name: data.name, lastName: data.lastName, uid: data.uid })
      );
      
    } catch (error) {
      dispatch(logout(error.response.data.message));
      console.log("Error");
      console.log(error.response.data);
    }
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    try {
      localStorage.clear();
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };
};

export const checkAutentication = () => {
  return async (dispatch) => {
    
    const token = localStorage.getItem("token");

    if (!token) return dispatch(logout());

    try {
      const { data } = await monitoreoApi.get("/auth/validarUser");
      console.log({ data });
      localStorage.setItem("token", data.token);
      localStorage.setItem("initDate-token", new Date().getTime());
      dispatch(
        login({ name: data.name, lastName: data.lastName, uid: data.uid })
      );
    } catch (error) {
      localStorage.clear();
      dispatch(logout());
    }
  };
};
