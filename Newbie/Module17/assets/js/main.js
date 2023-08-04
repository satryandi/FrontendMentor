
const submitButton = document.getElementById("formsubmit");

const email = document.querySelector(".email");
const emailLabel = document.querySelector(".email-label");

const successMessage = document.querySelector(".success-msg");

let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let errorFunc = function () {

    if (email.value.length === 0) {
        emailLabel.textContent = "Email cannot be empty";
        email.style.borderColor = "var(--color-secondary-two)";
        emailError.style.display = "inline";
    }

    if (!email.value.match(emailValidation) && email.value.length !== 0) {
        emailLabel.textContent = "Please Provide a valid email address";
        email.style.borderColor = "var(--color-secondary-two)";
        emailError.style.display = "inline";
    }

    if (email.value.match(emailValidation)) {
        emailLabel.textContent = "";
        email.style.borderColor = "var(--grayish-blue)";
        emailError.style.display = "none";
    }

    if (
        email.value.match(emailValidation)
    ) {
        successMessage.textContent = "Success! Please check your email";
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