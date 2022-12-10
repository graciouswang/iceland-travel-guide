// Hamburger menu 

let hamburgerMenu = document.getElementById('hamburger-menu');
let menuClose = document.getElementById('close-menu');
let responsiveMenu = document.getElementById('responsive-menu');

function openMenu() {
    responsiveMenu.style.display = "block";
}

function closeMenu() {
    responsiveMenu.style.display = "none";
}

hamburgerMenu.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

// Form validation 

let submitButton = document.getElementById('submit-btn');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email'); 
let nameErrorMessage = document.getElementById('name-error-message');
let emailErrorMessage = document.getElementById('email-error-message');
const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let thankYouMessage = document.getElementById('thankyou-message');

function validateEmail() {
    if (emailInput.value.length <= 0) {
        emailErrorMessage.innerText = 'Email must not be blank';
        emailInput.style.border = '2px solid var(--icelandicred)';
    } else if (!emailInput.value.match(validEmail)){
        emailErrorMessage.innerText = 'Email must be valid';
        emailInput.style.border = '2px solid var(--icelandicred)';
    } else {
        emailErrorMessage.innerText = '';
        emailInput.style.border = '1px solid black';
    }
}

function displayThankYouMessage() {
    if (nameInput.value.length >0 && emailInput.value.length >0 && emailInput.value.match(validEmail)) {
        thankYouMessage.innerText = 
        'Thank you for your enquiry, ' + nameInput.value + '!' + ' We will be in touch soon!';
    }
}

function handleFormSubmission(event) {
    event.preventDefault();
    if (nameInput.value.length <= 0) {
        nameErrorMessage.innerText = 'Name must not be blank';
        nameInput.style.border = '2px solid var(--icelandicred)';
    } else {
        nameErrorMessage.innerText = '';
        nameInput.style.border = '1px solid black';
        
    }
    validateEmail();
    displayThankYouMessage();
}

submitButton.addEventListener('click', handleFormSubmission);