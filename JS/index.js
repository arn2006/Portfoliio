// NB! important to make variable for element
// containig ALL 'active' elements (from CSS)
// ex. the body (or another element with all active elem.)
// then, ALL active elements are included in classList
// for that particular element, and can be toggled

const body = document.querySelector('body'),
      menuIconBox = document.querySelector('.menuIconBox');
      menuBox = document.querySelector('.menuBox');

menuIconBox.addEventListener('click', () => {
  body.classList.toggle('active');
})

// removes menu when clicking elsewhere
main.addEventListener('click', function(e) {
  if (!menuIconBox.contains(e.target) && !menuBox.contains(e.target)) {
    body.classList.remove('active');
  }
})