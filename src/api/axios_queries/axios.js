import axios from 'axios';

const axiosClient = axios.create({
  baseURL: "https://delivery.livsey.xyz",
  timeout: 100000,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
