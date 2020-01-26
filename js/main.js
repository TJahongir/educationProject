const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.ul');
  const navLinks = document.querySelectorAll('.ul li');
  // Toggle Nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
      link.addEventListener('click', () => {
        link.parentElement.classList.remove('nav-active');
        burger.classList.remove('toggle');
      });
    });
    // Burger Animation
    burger.classList.toggle('toggle');
  });
};

navSlide();
