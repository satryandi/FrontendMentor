const showMenu = document.querySelector('.show');
const closeMenu = document.querySelector('.close');
const menuNavbar = document.querySelector('.drop');
const backgroundBody = document.querySelector('body');
const dropdownMenu = document.querySelectorAll(".dropdown_menu");

dropdownMenu.forEach((link) => {
    const dropdownBtn = link.querySelector(".dropdown_btn");

    const dropdownSubMenu = link.querySelector(".dropdowns");
    const dropdownArrow = link.querySelector(".arrows");

    link.addEventListener("click", () => {
        dropdownBtn.classList.toggle(".active");

        if (dropdownBtn.classList.contains(".active")) {
            dropdownSubMenu.style.display = "block";
            dropdownArrow.src = "assets/svg/icon-arrow-up.svg";
        } else {
            dropdownSubMenu.style.display = "none";
            dropdownArrow.src = "assets/svg/icon-arrow-down.svg";
        }
    });
});

showMenu.addEventListener("click", () => {
    showMenu.style.display = "none";
    menuNavbar.style.display = "flex";
    menuNavbar.style.backgroundColor = "white";
    backgroundBody.style.backgroundColor = "var(--color-blackk)";
});

closeMenu.addEventListener("click", () => {
    showMenu.style.display = "block";
    menuNavbar.style.display = "none";
    backgroundBody.style.backgroundColor = "var(--color-white)";
});