import axios from "axios";
import { getVariablesEnv } from "./getVariablesEnv";

const { URL_API } = getVariablesEnv();

const monitoreoApi = axios.create({
  baseURL: 'http://localhost:5050/api'
});

// Configuración de interceptores
monitoreoApi.interceptors.request.use( config  => {
  config.headers = {
    ...config.headers,
    'token':localStorage.getItem('token')
  }

  return config;
});

export default monitoreoApi;