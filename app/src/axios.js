import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `https://asciify.undo.it:3001`,
});
export default axiosInstance;
