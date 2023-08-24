const menu = document.getElementById("menu");
const nav = document.querySelector("nav ul.nav-item");

menu.addEventListener("click", function () {
  nav.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("active");
  }
});
