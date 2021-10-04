export default class UserRequests {

    #httpClient;
  
    constructor(baseClient) {
      this.#httpClient = baseClient;
    }
  
    async getAllPlans(payload) {
        return this.#httpClient.get('/investment-plans');
      }
  
}