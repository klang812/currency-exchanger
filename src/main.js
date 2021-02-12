import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/currency-exchange.js';


function getConversion(response) {
  let usDollar = parseInt($('#usDollar').val());
  if (response.target_code.EUR) {
    $('.showConversion').text(`${usDollar} is worth ${response.conversion_rates}`);

  } else if (response.target_code.THB) {
    $('.showConversion').text(`${usDollar} is worth ${response.conversion_rates}`);
  
  } else  {
    $('.showConversion').text(`${usDollar} is worth ${response.conversion_rates}`);
  }
}
//(response.target_code.KRW)

$(document).ready(function() {
  $('#getConversion').click(function() {
    let country = document.getElementsByName("country");
    CurrencyExchange.getExchange(country)
      .then(function(response) {
        getConversion(response);
      });
  });
});