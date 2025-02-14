const submitButton = document.querySelector('#submit');
let inputName = document.querySelector('#lastName');
let inputMail = document.querySelector('#mail');
let inputMessage = document.querySelector('#message');

function emptyInput(name, mail, message) {
    if (name === '' || mail === '' || message === '') {
        alert('Vous devez remplir tous les champs')
        return false;
    }

    let isValid = true;

    if (!validInputMail(mail)) {
        inputMail.value = '';
        isValid = false;
    }

    return isValid;
}
/* VERIFICATION EMAIL */
function validInputMail(mail){
    if (
        /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,3}$/
            .test(mail) === true //on regarde si l'email contient bien un arobas et un point
    ) {
        return true;

    } else {
        alert('L\'email n\'est pas valide.');
        return false;
    }
}
submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (emptyInput(inputName.value, inputMail.value, inputMessage.value)) {
        console.log(`Nom: ${inputName.value}\nEmail: ${inputMail.value}\nMessage: ${inputMessage.value}`);
        inputName.value = '';
        inputMail.value = '';
        inputMessage.value = '';
    }
})
