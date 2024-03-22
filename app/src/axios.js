import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Content-Type': 'multipart/form-data',
  },
});
export default axiosInstance;
