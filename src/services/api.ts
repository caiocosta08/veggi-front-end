import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  // baseURL: "http://192.168.15.34:3131",
  // baseURL: "http://localhost:3030/", //local
  // baseURL: "http://192.168.15.44:3333",
  baseURL: "http://3.23.104.79/api/",
})

// api.interceptors.request.use(async config => {
//   const token = getToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default api;