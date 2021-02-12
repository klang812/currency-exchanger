export default class CurrencyExchange {
  static getExchange(country) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${country}`)
    .then(function(response) {
      if(!response.ok) {
        throw Error(response.error);
      }
      return response.json();
    })
    .catch(function(error) {
      return error;
    });
  }
}