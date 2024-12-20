import axios from 'axios';

const axiosClient = axios.create({
  baseURL: "https://gamch1k.v6.navy/delivery",
  timeout: 10000,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
