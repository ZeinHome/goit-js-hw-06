const incBtn = document.querySelector('button[data-action="increment"]');
const decBtn = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');

let counterValue = 0;
incBtn.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
})

decBtn.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
})