import axios from 'axios';
const api = axios.create({
  baseURL: "http://18.216.58.135/veggi",
})


export default api;