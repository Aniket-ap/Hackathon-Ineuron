// var sections = document.querySelectorAll("div");
// var container = document.querySelector(".cards__course");
// container.addEventListener("scroll", function () {
//   sections.forEach((e, i) => {
//     var top = e.getBoundingClientRect().top;
//     if (top == 0) {
//       e.classList.add("lineUpRight");
//     } else {
//       e.classList.remove("lineUpRight");
//     }
//   });
// });
// container.dispatchEvent(newCustomEvent("scroll"));

// function myFunction() {
//     console.log("asfdsf");
//     var x = document.getElementById("myTopnav");
//     if (x.className === "ulnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "ulnav";
//     }
// }

const button = document.querySelector('.ham');
button.addEventListener('click', addClass, false);

function addClass() {
  var x = document.querySelector('.res__none');
  x.classList.toggle('res__ul');
}
