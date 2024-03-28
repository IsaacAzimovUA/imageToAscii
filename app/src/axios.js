import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `http://localhost:${process.env.API_PORT}`,
});
export default axiosInstance;
