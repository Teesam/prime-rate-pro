export default class Requests {

    #httpClient;
  
    constructor(baseClient) {
      this.#httpClient = baseClient;
    }
  
    async createInvestmentPlans(payload) {
      return this.#httpClient.post('/investment-plans', payload);
    }
  
}