// Navbar
let navBar = document.getElementsByTagName("nav")[0];
let navBtn = document.getElementById("menuTick");

navBtn.addEventListener("click", () => navBar.style.display = navBar.style.display == "block" ? "none" : "block");

window.addEventListener('resize', () => {
  window.innerWidth < 539 ? navBar.style.display == "none" : navBar.style.display = "block";
  window.innerWidth > 539 ? navBar.style.display == "block" : navBar.style.display = "none";
});