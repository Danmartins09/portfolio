const scrollToTop = document.querySelector(".scrollToTop");
scrollToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

window.addEventListener("scroll", () => {
  window.pageYOffset > 100
    ? (scrollToTop.style.display = "block")
    : (scrollToTop.style.display = "none");
});

const html = document.querySelector("html");

const responsiveNavbar = document.querySelector(".responsive__navbar");

responsiveNavbar.addEventListener("click", (e) => e.stopPropagation());
html.addEventListener("click", () => responsiveNavbar.classList.remove("show"));

const responsiveToggle = document.querySelector(".toggle");

const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) =>
  link.addEventListener("click", () =>
    responsiveNavbar.classList.remove("show")
  )
);

responsiveToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  responsiveNavbar.classList.toggle("show");
});

// const icons = document.querySelectorAll(".links img");

// function activeIcon(event){
//   event.preventDefault();
//   icons.forEach((img,index) => {    
//     icons[index].classList.remove('ativo')
//   });
//   event.currentTarget.classList.add('ativo');
// }

// icons.forEach((img) => {
//   img.addEventListener('click', activeIcon)
// });


