const refs = {
    input: document.querySelector('#name-input'),
    userName: document.querySelector('#name-output'),
}



function onUserNameEvent(event) {
    if (event.currentTarget.value === "") {
        return refs.userName.textContent = 'Anonymous';
    }


    return refs.userName.textContent = event.currentTarget.value;
};

refs.input.addEventListener('input', onUserNameEvent);