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

    // user queries
    registration(data) {
        return this.sendRequest('post', '/auth/register', data);
    }
    login(data){
        return this.sendRequest('post', '/auth/login', data);
    }
    getUserInfo(){
        return this.sendRequest('get', '/api/user/info');
    }
    logout(){
      return this.sendRequest('post', '/api/user/logout');
    }
    delete(){
      return this.sendRequest('delete', '/api/user/delete');
    }
    updatePhoto(photo){
      return this.sendRequest('patch', '/api/user/photo', photo);
    }
    changePassword(newPassword){
      return this.sendRequest('patch', '/api/user/change_password', newPassword);
    }
    changeUserProfile(data){
      return this.sendRequest('patch', '/api/user/change', data);
    }
    getDish(){
      return this.sendRequest('get', '/api/dishes');
    }
    getOrders(){
        return this.sendRequest('get', '/api/orders')
    }
    getOrderDetailsById(orderId){
        return this.sendRequest('get', `/api/orders/order/${orderId}`)
    }
    confirmOrder(orderId){
        return this.sendRequest('post', `/api/orders/confirm/${orderId}`)
    }
    finishOrder(orderId){
        return this.sendRequest('post', `/api/orders/finish/${orderId}`)
    }
    createOrder(data){
      return this.sendRequest('post', '/api/orders/create',data)
    }
    getCategories(){
      return this.sendRequest('get',`api/dishes/categories`)
    }

} 