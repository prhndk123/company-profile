import axios from "axios";
import { useAuthStore } from "~/store/auth.store";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKENDLESS_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers["application-id"] = import.meta.env.VITE_BACKENDLESS_APP_ID;
  config.headers["api-key"] = import.meta.env.VITE_BACKENDLESS_API_KEY;

  const token = useAuthStore.getState().token;
  if (token) {
    config.headers["user-token"] = token;
  }

  return config;
});
