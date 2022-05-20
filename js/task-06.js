const refs = {
    inputEl: document.querySelector('#validation-input')
};

refs.inputEl.addEventListener('blur', validationInput);

function validationInput(event) {
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        refs.inputEl.classList.add('valid')
        refs.inputEl.classList.remove('invalid')
    } else {
        refs.inputEl.classList.add('invalid')
        refs.inputEl.classList.remove('valid')
    }

}