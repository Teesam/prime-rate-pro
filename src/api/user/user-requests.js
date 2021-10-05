export default class UserRequests {

    #httpClient;
  
    constructor(baseClient) {
      this.#httpClient = baseClient;
    }
  
    async getAllPlans() {
        return this.#httpClient.get('/investment-plans');
    }

    async invest(id) {
        return this.#httpClient.post(`/investment-plans/${id}/invest`);
    }
  
}