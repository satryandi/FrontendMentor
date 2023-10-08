const iconHamburger = document.querySelector("#icon-hamburger");
const iconClose = document.querySelector("#icon-close");

const menu = document.querySelector("#menu");
const linkMenu = document.querySelectorAll(".link-menu");

const iconClicked = (showIcon, hideIcon) => {
  showIcon.classList.remove("hide-icon");
  hideIcon.classList.add("hide-icon");
};

iconHamburger.addEventListener("click", (e) => {
  e.preventDefault();
  iconClicked(iconClose, iconHamburger);

  menu.classList.remove("hide-menu");
});

iconClose.addEventListener("click", (e) => {
  e.preventDefault();
  iconClicked(iconHamburger, iconClose);

  menu.classList.add("hide-menu");
});

linkMenu.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    link.children[0].classList.toggle("rotate-180");
    // Displays the submenu associated with the element that was clicked
    const subMenu = link.nextElementSibling;
    subMenu.classList.toggle("hide-menu");

    // Hides the other submenus
    linkMenu.forEach((otherLink) => {
      if (otherLink !== link) {
        otherLink.children[0].classList.remove("rotate-180");

        const otherSubMenu = otherLink.nextElementSibling;
        otherSubMenu.classList.add("hide-menu");
      }
    });
  });
});

window.addEventListener("load", (e) => {
  e.preventDefault();

  linkMenu.forEach((icon) => {
    icon.children[0].classList.remove("rotate-180");
  });
});
