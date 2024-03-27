import axios from 'axios';

const { API_PORT, API_HOST } = process.env;

const axiosInstance = axios.create({
  baseURL: `http://${API_HOST}:${API_PORT}`,
});
export default axiosInstance;
