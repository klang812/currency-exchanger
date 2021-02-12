export default class CurrencyExchange {
  static getExchange() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/EUR`)
      .then(function(response) {
        if(!response.ok) {
          throw Error(response.result);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}