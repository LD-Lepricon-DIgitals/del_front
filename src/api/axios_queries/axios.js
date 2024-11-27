import axios from 'axios';

const axiosClient = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.response.use(response => {
  const setCookieHeader = response.headers['set-cookie'];
  console.log(setCookieHeader);
  
  if (setCookieHeader) {
      setCookieHeader.forEach(cookie => {
      const [cookieName, cookieValue] = cookie.split(';')[0].split('=');
      console.log(`${cookieName}  ${cookieValue}`);
      localStorage.setItem(cookieName, cookieValue);
    });
  }
  
  return response;
});
export default axiosClient;
