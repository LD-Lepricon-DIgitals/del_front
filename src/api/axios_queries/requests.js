import axiosClient from './axios';

export class Requests {

    constructor(axiosInstance) {
      this.axios = axiosInstance;
      this.headers = {};
    }
  
    sendRequest(method, url, data = null) {
      const config = {
        method,
        url,
        headers: this.headers,
      };
  
      if (data) {
        config.data = data;
      }
  
      return this.axios(config);
    }

    Registration(data) {
        return this.sendRequest('post', '/auth/register', data);
    }
    Login(data){
        return this.sendRequest('post', '/auth/login', data);
    }
    
}  
