// import axios from "axios";
// import { useAuthStore } from "~/store/auth.store";
// import "dotenv/config"

// export const axiosInstance = axios.create({
//   // baseURL: "https://hotshotfinger-us.backendless.app",
//   baseURL: process.env.VITE_BACKENDLESS_BASE_URL
// });


// axiosInstance.interceptors.request.use((config) => {
//   const token = useAuthStore.getState().token;
//   if (token) {
//     config.headers["user-token"] = token;
//   }
//   return config;
// });