const refs = {
    colorEl: document.querySelector('.color'),
    btnChangColorEl: document.querySelector('.change-color'),
    body: document.querySelector('body'),
}

console.log(refs.colorEl);
console.log(refs.btnChangColorEl);
refs.btnChangColorEl.addEventListener('click', getRandomHexColor)

function getRandomHexColor(event) {
    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    refs.colorEl.textContent = randomColor;
    refs.body.style.backgroundColor = randomColor;

    return randomColor;
}