export default class Auth {

    #httpClient;
  
    constructor(baseClient) {
      this.#httpClient = baseClient;
    }
  
    async register(payload) {
      return this.#httpClient.post('/auth/register', payload);
    }

    async login(payload) {
        return this.#httpClient.post('/auth/login', payload);
      }
  
  }