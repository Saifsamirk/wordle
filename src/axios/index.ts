import axios, { AxiosRequestConfig } from "axios";

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

AxiosInstance.interceptors.request.use(
  (cfg: AxiosRequestConfig<any>): AxiosRequestConfig<any> => {
    if (cfg.headers) {
      cfg.headers["Accept"] = "application/json";
      cfg.headers["Content-Type"] = "application/json";
    }
    return cfg;
  }
);

export default AxiosInstance;
