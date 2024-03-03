const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const validateEmail = (inputEmail) => inputEmail.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const validatePassword = (inputPassword) => inputPassword.value.length >= 8;

const generateError = (errorName, errorMsg) => {
    if (errorName === "email") {
        emailError.textContent = errorMsg || '';
    } else if (errorName === "password") {
        passwordError.textContent = errorMsg || '';
    }
}

const formValidate = () => {
    let isValid = true;
    if (!validateEmail(email)) {
        generateError("email", "Make sure email is more than 3 characters and has @ and a .");
        isValid = false;
    } else {
        generateError("email", "");
    }
    if (!validatePassword(password)) {
        generateError("password", "Please enter a password with at least 8 characters");
        isValid = false;
    } else {
        generateError("password", "");
    }
    return isValid;
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (formValidate()) {
        if (confirm("Are you sure you want to submit the form?")) {
            const successMsg = document.createElement("p");
            successMsg.textContent = "All good to go!";
            successMsg.classList.add("success-msg");
            form.insertBefore(successMsg, form.querySelector('.btn'));
            form.reset();
        } else {
            window.location.href = window.location.href; 
            form.reset(); 
        }
    }
});

email.addEventListener("focusout", () => {
    if (!validateEmail(email)) {
        generateError("email", "Make sure email is more than 3 characters and has @ and a .");
    } else {
        generateError("email", "");
    }
});

password.addEventListener("focusout", () => {
    if (!validatePassword(password)) {
        generateError("password", "Please enter a password with at least 8 characters");
    } else {
        generateError("password", "");
    }
});
