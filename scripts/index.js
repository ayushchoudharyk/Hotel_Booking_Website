const viewMoreBtn = document.querySelector('#view_more');
const viewCity = document.getElementById('view-more-city-cards');

viewMoreBtn.addEventListener('click', () => {
  if (viewMoreBtn.innerText == 'View More') {
    viewCity.style.display = 'block';
    viewMoreBtn.innerText = 'View Less';
  } else {
    viewCity.style.display = 'none';
    viewMoreBtn.innerText = 'View More';
  }
});
