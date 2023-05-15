import { useDispatch } from "react-redux";
import monitoreoApi from "../helpers/monitoreoApi";
import { login, logout } from "../store/authentication/authSlice";

export const useCheckAuthentication = async () => {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  if(!token) return dispatch(logout());

  try {
    const { data } = await monitoreoApi.get('/auth//validarUser');
    console.log({ data });
    localStorage.setItem('token', data.token);
    localStorage.setItem('initDate-token', new Date().getTime());
    dispatch( login({...data}) );
  } catch (error) {
    localStorage.clear();
    dispatch( logout() );
    
  }
}