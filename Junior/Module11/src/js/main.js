const hamburger = document.querySelector('.menu_wrapper')
const links = document.querySelector('.links_wrapper')
const sapi = document.querySelector('.triangle')

hamburger.addEventListener("click", () => {
  links.classList.toggle(".active");

  if (links.classList.contains(".active")) {
    links.style.display = "block";
    sapi.style.display = "block";
  } else {
    links.style.display = "none";
    sapi.style.display = "none";
  }
})