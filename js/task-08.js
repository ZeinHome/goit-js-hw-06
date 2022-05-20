const refs = {
    formEl: document.querySelector('.login-form'),
}

refs.formEl.addEventListener('submit', onLoginFormSubmit);

function onLoginFormSubmit(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    if (email && password) {

        // const formData = new FormData(event.currentTarget);
        // formData.forEach((value, name) => {
        //     console.log('value: ', value);
        //     console.log('name: ', name);
        // })

        const formData = {
            email,
            password,
        }

        console.log(formData);
        event.currentTarget.reset();



    } else {
        alert('Заполните все поля');
    }



}