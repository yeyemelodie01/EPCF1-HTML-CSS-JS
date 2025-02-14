const submitButton = document.querySelector('#submit');
let inputName = document.querySelector('#lastName');
let inputMail = document.querySelector('#mail');
let inputMessage = document.querySelector('#message');
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Je suis ici');
    console.log(inputName.value);
    console.log(inputMail.value);
    console.log(inputMessage.value);
})
