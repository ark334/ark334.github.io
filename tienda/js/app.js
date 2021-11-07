document.getElementById("test").children[0].className += " load";

const navToggle = document.querySelector('.nav__toggle');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});