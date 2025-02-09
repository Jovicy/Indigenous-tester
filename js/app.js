document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navLists = document.querySelectorAll(".nav-list"); // Select both lists

  menuBtn.addEventListener("click", () => {
    navLists.forEach((navList) => {
      navList.classList.toggle("active");
    });
  });
});


const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach(item => {
  const btn = item.querySelector('.accordion-btn');
  btn.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

