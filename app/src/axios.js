import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `https://165.232.158.155:${process.env.API_PORT}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  origin: '*',
});
export default axiosInstance;
