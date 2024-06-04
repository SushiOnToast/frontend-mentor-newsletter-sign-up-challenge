let inputField = '';
let errorMessage = '';
let mainContainer = '';
let successContainer = '';
const emailRegexp = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

// only uses queryselector AFTER html loads
function onLoad() {
    inputField = document.querySelector('input');
    errorMessage = document.querySelector('#input-error');
    mainContainer = document.querySelector('#main-container');
    successContainer = document.querySelector('#success-container');
}

document.addEventListener("DOMContentLoaded", onLoad);

function validateInput() {
    if (inputField.value.match(emailRegexp)) {
        displaySucess();
    } else {
        inputField.className = "error";
        errorMessage.style.display = 'inline-block'; // none to inline-block makes it appear
    }
}

function displaySucess() {
    console.log('Sucess!');
    mainContainer.remove();  // screen cleared
    successContainer.style.display = 'flex'; // new content displayed
}