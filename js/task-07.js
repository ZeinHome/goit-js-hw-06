const refs = {
    fontSizeControlEl: document.querySelector('#font-size-control'),
    textInputEl: document.querySelector("#text"),
}



refs.fontSizeControlEl.addEventListener('input', onFontSuzeInput);

function onFontSuzeInput(event) {

    refs.textInputEl.style.fontSize = `${event.currentTarget.value}px`;


}