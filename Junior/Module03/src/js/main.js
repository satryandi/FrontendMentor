
const btnShow = document.querySelector('.btn_show');
const btnClose = document.querySelector('.btn_close');
const showMenu = document.querySelector('.menuclose_wrapper');
const bodyBackground = document.querySelector('body');
const logoWrapper = document.querySelector('nav');

btnShow.addEventListener('click', function () {
    showMenu.style.visibility = 'visible';
    bodyBackground.style.backgroundColor = 'var(--color-grayishblue)';
    logoWrapper.style.backgroundColor = 'var(--color-grayishblue)';
});

btnClose.addEventListener('click', function () {
    showMenu.style.visibility = 'hidden';
    bodyBackground.style.backgroundColor = 'var(--color-offwhite)';
    logoWrapper.style.backgroundColor = 'var(--color-offwhite)';
});