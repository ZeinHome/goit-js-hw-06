function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const colorBtn = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

colorBtn.addEventListener('click', () => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    spanEl.textContent = getRandomHexColor();
});