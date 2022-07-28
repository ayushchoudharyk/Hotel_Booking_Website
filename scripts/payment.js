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
