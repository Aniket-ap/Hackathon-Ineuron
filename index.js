const button = document.querySelector(".ham");
button.addEventListener("click", addClass, false);

function addClass() {
  var x = document.querySelector(".res__none");
  x.classList.toggle("res__ul");
}
