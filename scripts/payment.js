let urlParams = new URLSearchParams(window.location.search);

const API_URL = 'https://travel-advisor.p.rapidapi.com/';
const tripAdvisorHost = 'travel-advisor.p.rapidapi.com';
const tripAdvisorKey = 'b69a63648cmsheb7e07bb9716cc8p173af1jsn9786c53aadf0';

let pay_Btn = document.getElementById('pay_now-Btn');

if (!isLogin || isLogin === 'false') {
  pay_Btn.disabled = true;
} else if (isLogin === 'true') {
  pay_Btn.disabled = false;
}

pay_Btn.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Hi your booking is successfully!');
});
