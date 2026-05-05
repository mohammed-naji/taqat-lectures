// document.oncopy = function () {
//   let text = window.getSelection().toString();
//   let url = window.location.href;
//   let fullText = text + "\n\n" + "Read Full Article " + url;

//   navigator.clipboard.writeText(fullText);
// };

// This text copied from (Document)

// Lorem ipsum dolor sit amet consectetur adipi

// Read Full Article http://127.0.0.1:5500/lec18-js/index.html

// const copy = document.getElementsByTagName("div");
// const copy = document.querySelectorAll("div");

// console.log(copy);

// const btn = document.querySelector("button");

const copy_btns = document.querySelectorAll(".copy-box i");
copy_btns.forEach(function (el) {
  el.onclick = function () {
    navigator.clipboard.writeText(el.previousElementSibling.textContent);

    // el.nextElementSibling.style.display = "block";
    el.nextElementSibling.classList.add("show");
    setTimeout(function () {
      // el.nextElementSibling.style.display = "none";
      el.nextElementSibling.classList.remove("show");
    }, 2000);
  };
});

// setTimeout(function () {
//   console.log("setTimeout");
// }, 2000);

// setInterval(function () {
//   console.log("setInterval");
// }, 2000);

const counter = document.querySelector("p");
const span = document.querySelector("p span");

let timer = setInterval(function () {
  span.innerHTML = span.innerHTML - 1;
  if (span.innerHTML <= 0) {
    // span.innerHTML = 0;
    clearInterval(timer);
    counter.style.display = "none";
  }
}, 1000);
