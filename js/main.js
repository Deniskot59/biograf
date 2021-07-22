const navBtn = document.querySelector('.nav__button');
const mobileNav = document.querySelector('.mobile__nav');
const body = document.body;

navBtn.addEventListener('click', function (event) {
  event.stopPropagation();
  toggleMobileNav();
});

window.addEventListener('click', function () {
  console.log('Click on window');

  if (body.classList.contains('no-scroll')) {
    toggleMobileNav();
  }
});

mobileNav.addEventListener('click', function (event) {
  event.stopPropagation();
});

function toggleMobileNav() {
  mobileNav.classList.toggle('mobile__nav-active');
  navBtn.classList.toggle('nav__button-close');
  body.classList.toggle('no-scroll');
}
