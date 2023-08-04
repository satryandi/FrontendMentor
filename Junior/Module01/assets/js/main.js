
const submitButton = document.getElementById("formsubmit");
const dismissButton = document.getElementById("dismiss__button");

const email = document.querySelector(".email");
const emailLabel = document.querySelector(".email-label");

const mainPage = document.querySelector(".container");
const successPage = document.querySelector(".card");

let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let errorFunc = function () {
    if (email.value.length === 0) {
        emailLabel.textContent = "Email cannot be empty";
        email.style.borderColor = "var(--color-tomato)";
    }

    if (!email.value.match(emailValidation) && email.value.length !== 0) {
        emailLabel.textContent = "Please Provide a valid email address";
        email.style.borderColor = "var(--color-tomato)";
    }

    if (email.value.match(emailValidation)) {
        emailLabel.textContent = "";
        email.style.borderColor = "var(--color-tomato)";
    }

    if (email.value.match(emailValidation)) {
        mainPage.style.visibility = "hidden"
        successPage.style.visibility = "visible";
    } else {
        console.log("Unknown error");
    }
};

//CLick with mouse
submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    errorFunc();
});

//Click with Enter
email.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        errorFunc();
    }
});

//hidden success page, visible main page
dismissButton.addEventListener("click", function (e) {
    e.preventDefault();
    successPage.style.visibility = "hidden";
    mainPage.style.visibility = "visible";
});