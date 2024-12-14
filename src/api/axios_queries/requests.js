import axios from "axios";

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

  registration(data) {
    return this.sendRequest("post", "/auth/register", data);
  }
  login(data) {
    return this.sendRequest("post", "/auth/login", data);
  }
  getUserInfo() {
    return this.sendRequest("get", "/api/user/info");
  }
  updateUserInfo(data) {
    return this.sendRequest("patch", "/api/user/change", data);
  }
  changeAvatar(data) {
    return this.sendRequest("patch", "/api/user/photo", data);
  }
  changePassword(data) {
    return this.sendRequest("patch", "/api/user/change_password", data);
  }
}
