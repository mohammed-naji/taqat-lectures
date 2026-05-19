// let btn = document.querySelector(".theme-toggle");
// // console.log(btn);
// btn.onclick = () => {
//   btn.classList.toggle("fa-moon");
//   btn.classList.toggle("fa-sun");
//   document.body.classList.toggle("dark");
// };

let btn = document.querySelectorAll(".theme-toggle");
// console.log(btn);
btn.forEach((el) => {
  el.onclick = () => {
    el.classList.toggle("fa-moon");
    el.classList.toggle("fa-sun");
    document.body.classList.toggle("dark");
  };
});

// Responsive HEader
let menu_btn = document.querySelector("header .menu button");
let menu = document.querySelector("header .menu ul");
menu_btn.onclick = () => menu.classList.toggle("active");
