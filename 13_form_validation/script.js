let form = document.querySelector("form")
let input = document.querySelectorAll("input")
let textArea = document.querySelector("textarea")


let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let allErrors = document.querySelectorAll(".error");
    allErrors.forEach(function (err) {
        err.textContent = "";
    })

    let firstName = input[0];
    let lastName = input[1];
    let email = input[2];
    let contact = input[3];

    let isValid = true;

    if (firstName.value.trim() === "") {
        showError(firstName, "First Name is required!");
        isValid = false;
    } else {
        if (firstName.length < 3 || firstName.length > 10) {
            alert("FirstName must be greater 3 and less than 10")
        } else {
            showSuccess(firstName);
        }
    }

    if (lastName.value.trim() === "") {
        showError(lastName, "last Name is required!");
        isValid = false;
    } else {
        if (lastName.length < 3 || lastName.length > 10) {
            alert("lastName must be greater 3 and less than 10")
        } else {
            showSuccess(lastName);
        }
    }

    if (!emailPattern.test(email.value.trim())) {
        showError(email, "Enter a valid email!")
        isValid = false;
    } else {
        showSuccess(email);
    }

    if (contact.value.trim().length !== 10) {
        showError(contact, "Contact number must be 10 digits!")
        isValid = false;
    } else {
        showSuccess(contact);
    }

    if (textArea.value.trim() === "") {
        showError(textArea, "Please write something!")
        isValid = false;
    } else {
        showSuccess(textArea);
    }

    if (isValid) {
        alert("Form Submitted successfully!");
        form.reset();
        clearBorder();
    }
})

function showError(input, message) {
    let errorMessage = input.nextElementSibling;
    errorMessage.textContent = message;
    input.style.border = "2px solid red"
}
function showSuccess(input) {
    let errorMessage = input.nextElementSibling;
    errorMessage.textContent = '';
    input.style.border = "2px solid green";
}

function clearBorder() {
    input.forEach(function (inp) {
        inp.style.border = "1px solid #444";
    });
    textArea.style.border = "1px solid #444";
}