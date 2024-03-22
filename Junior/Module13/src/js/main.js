const nav = document.querySelector(".nav");
const icon = document.getElementById("icon");
const dropdown = document.querySelector(".dropdown");
const bookmark = document.getElementById("bookmark");

const clicked = (minHeight, backgroundColor, src, alt) => {
  nav.style.minHeight = minHeight;
  nav.style.backgroundColor = backgroundColor;
  icon.src = src;
  icon.alt = alt;
};

icon.addEventListener("click", (event) => {
  event.preventDefault();
  dropdown.classList.toggle("hide");
  icon.classList.toggle("change");
  if (icon.classList == "change") {
    clicked(
      "100%",
      "rgba(0, 0, 0, .2)",
      "./images/icon-close-menu.svg",
      "Close Menu"
    );
  } else {
    clicked(
      "0",
      "transparent",
      "./images/icon-hamburger.svg",
      "Hamburger Menu"
    );
  }
});

bookmark.addEventListener("click", (e) => {
  e.preventDefault();
  bookmark.classList.toggle("active");
});
