import axios from 'axios';
import { trackPromise as promiseTracker } from 'react-promise-tracker';

const httpOptions = {
  timeoutMills: 0,
  trackPromise: true,
};

export class HttpClient {

  constructor({ baseURL = '', ...options }) {
    this.httpOptions = { ...httpOptions, ...options };
    this.client = axios.create({ baseURL });
    this.client.CancelToken = axios.CancelToken;
    this.client.isCancel = axios.isCancel;
    this._init();
  }

  post(url, data, config = httpOptions) {
    return this._request({
      ...this.httpOptions,
      ...config,
      url,
      data,
      method: 'post',
    });
  }

  put(url, data, config = httpOptions) {
    return this._request({
      ...this.httpOptions,
      ...config,
      url,
      data,
      method: 'put',
    });
  }

  delete(url, config = httpOptions) {
    const mConfig = {  };
    return this._request({
      ...this.httpOptions,
      ...config,
      url,
      method: 'delete',
    });
  }

  get(url, params, config = httpOptions) {
    return this._request({
      ...this.httpOptions,
      ...config,
      url,
      params,
      method: 'get',
    });
  }

  get httpClient () {
    return this.client;
  }

  async _request(config = httpOptions) {
    let response = null, timer = null;
    const {
      trackPromise,
      timeoutMills,
      ...mConfig
    } = { ...this.httpOptions, ...config };

    try {
      // set request timeout executor
      if (timeoutMills && Number.isInteger(timeoutMills)) {
        const source = this.client.CancelToken.source();
        mConfig.cancelToken = source.token;

        timer = setTimeout(
          () => {
            if (response === null) {
              source.cancel();
            }
          },
          timeoutMills
        );
      }

      response = trackPromise === true 
        ? await promiseTracker(this.client.request(mConfig))
        : await this.client.request(mConfig);
      if (timer) {
        clearTimeout(timer);
      }

      return response;
    } catch (error) {
      throw error;
    }
  };

  _init() {
    this.client.defaults.headers.post['Content-Type'] = 'application/json';
    this.client.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    this.client.defaults.headers.common['API-KEY'] = '58b8f8ae-e67c-4a45-b85c-c22d2ed126dd';
    delete this.client.defaults.headers.common['Authorization'];

    // set headers for device info
    
  this.client.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('token');
    if(token){
      this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
      return config;
  });

  

    
    

    // setup interceptors
    this.client.interceptors.response.use(
      response => response.data,
      error => {
        if (this.client.isCancel(error)) {
          error = Object.assign({}, error, { isCancel: true })
          
          return error;
        } else if (String(error.message).toLowerCase() === 'network error') {
          error = Object.assign({}, error, { isNetwork: true });

          return error;
        }
    
        return Promise.reject(error);
      }
    );
  }
}