let open_btn = document.querySelector(".open-menu");
let close_btn = document.querySelector(".close-menu");
let menu = document.querySelector(".side-menu");

open_btn.onclick = (e) => {
  e.stopPropagation();
  menu.style.right = "0";
};

close_btn.onclick = () => {
  menu.style.right = "-310px";
};

document.onclick = () => {
  menu.style.right = "-310px";
};

menu.onclick = (e) => e.stopPropagation();
