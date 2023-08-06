const btnRead = document.querySelector('.notif_read');
const notifTotal = document.querySelector('.notif_total');
const read = document.querySelectorAll('.unread');
const dots = document.querySelectorAll('.notif_dots');

btnRead.addEventListener('click', function () {

    for (let i = 0; i < read.length; i++) {
        read[i].style.backgroundColor = "var(--color-white)";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].style.visibility = 'hidden';
    }

    notifTotal.textContent = "0";
});