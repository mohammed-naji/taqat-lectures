// let link = document.querySelector(".link");
// link.onclick = (e) => e.preventDefault();
// // console.log(link);

// let sp = document.querySelector(".sp");
// // console.log(sp);
// sp.onclick = () => {
//   // alert(11111);
//   // window.location.href = "https://google.ps";
//   window.open("https://google.ps");
// };

// let top_btn = document.querySelector(".top");
// window.onscroll = () => {
//   console.log(window.scrollY);
//   if (window.scrollY > 300) {
//     top_btn.style.display = "flex";
//   } else {
//     top_btn.style.display = "none";
//   }
// };
// top_btn.onclick = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };

let top_btn = document.querySelector(".top");
// console.log(top_btn);
window.onscroll = () => {
  if (
    window.scrollY >
    (document.documentElement.scrollHeight - window.innerHeight) / 2
  ) {
    top_btn.style.transform = "rotate(180deg)";
  } else {
    top_btn.style.transform = "rotate(0)";
  }
};

top_btn.onclick = () => {
  if (
    window.scrollY >
    (document.documentElement.scrollHeight - window.innerHeight) / 2
  ) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }
};
