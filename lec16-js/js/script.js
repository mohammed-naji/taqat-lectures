const mins_btns = document.querySelectorAll(".mins");
const plus_btns = document.querySelectorAll(".plus");

// for (let i = 0; i < mins_btns.length; i++) {
//   console.log(mins_btns[i]);
// }

mins_btns.forEach(function (btn) {
  btn.onclick = function () {
    btn.nextElementSibling.value = btn.nextElementSibling.value - 1;

    if (btn.nextElementSibling.value == 0) {
      btn.nextElementSibling.value = 1;
    }
  };
});

plus_btns.forEach(function (btn) {
  btn.onclick = function () {
    btn.previousElementSibling.value =
      parseInt(btn.previousElementSibling.value) + 1;
  };
});

// selector.event = action
