import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/currency-exchange.js';


function getConversion(response) {
  let usDollar = parseInt($('#usDollar').val());
  if (response.result === "error") {
    if (response['error-type'] === "unsupported-code") {
      $('.showError').text("Country code is not valid");
    } else {
      $('.showError').text(`There was an error: ${response['error-type']}`);
    }
  } else {
    $('.showConversion').text(`${usDollar} is worth ${(response.conversion_rate).toFixed(2) * usDollar}`);
  }
}

$(document).ready(function() {
  $('#getConversion').click(function() {
    let country = $('input:radio[name=country]:checked').val();
    CurrencyExchange.getExchange(country)
      .then(function(response) {
        getConversion(response);
      });
  });
});