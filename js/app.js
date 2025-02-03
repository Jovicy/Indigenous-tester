document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navList = document.querySelector(".nav-list");

  menuBtn.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
});

const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach(item => {
  const btn = item.querySelector('.accordion-btn');
  btn.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

