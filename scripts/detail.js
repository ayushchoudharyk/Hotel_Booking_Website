// const { log } = require('console');

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
