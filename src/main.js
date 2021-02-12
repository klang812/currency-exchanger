import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency-exchange.js';

let usDollar = parseInt($('#usDollar').val());
function getExchange(response) {
  if (response.conversion_rates.EUR) {
    $('.showConversion').text(`${usDollar} is worth ${response.conversion_rates.EUR}`);

  } else if (response.conversion_rates.THB) {
    $('.showConversion').text(`${usDollar} is worth ${response.conversion_rates.THB}`);

  } else (response.conversion_rates.KRW) {
  $('.showConversion').text(`${usDollar} is worth ${response.conversion_rates.KRW}`);
  }
};

$(document).ready(function() {
  $('#getConversion').click(function() {
    CurrencyExchange.getExchange(country)
      .then(function(response) {
        getExchange(response);
      });
  });
});