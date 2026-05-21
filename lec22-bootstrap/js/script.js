let width = document.querySelector("#width");
let width_em = document.querySelector("#width-em");
width.innerHTML = window.outerWidth + "px";
width_em.innerHTML = parseInt(window.outerWidth / 16) + "em";

// if (window.outerWidth < 800) {
//   window.location.href = "https://google.ps";
// }

window.onresize = () => {
  if (window.outerWidth < 800) {
    window.location.href = "https://google.ps";
  }

  width.innerHTML = window.outerWidth + "px";
  width_em.innerHTML = parseInt(window.outerWidth / 16) + "em";
};
