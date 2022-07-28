// const { log } = require('console');
const API_URL = 'https://travel-advisor.p.rapidapi.com/';
const tripAdvisorHost = 'travel-advisor.p.rapidapi.com';
const tripAdvisorKey = 'b69a63648cmsheb7e07bb9716cc8p173af1jsn9786c53aadf0';

let getAdult = document.getElementById('adults');
let totalPrice = document.getElementById('totalPrice');
let getToDate = document.getElementById('toDate');
let getFromDate = document.getElementById('fromDate');
const priceRoom = 1000;
// log(getAdult.value + totalPrice.value);
let updatePrice = () => {
  getToDate.min = getFromDate.value;
  let toDateValue = new Date(getToDate.value);
  let fromDateValue = new Date(getFromDate.value);

  let days = (toDateValue - fromDateValue) / (24 * 60 * 60 * 1000);

  if (getAdult.value && getToDate.value && getFromDate.value) {
    totalPrice.value = 'Rs. ' + parseInt(getAdult.value) * priceRoom * days;
  } else {
    totalPrice.value = 'Rs.0';
  }
};

updatePrice();
