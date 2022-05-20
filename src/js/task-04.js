const refs = {
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    btnIncrement: document.querySelector('[data-action="increment"]'),

};

let counterValue = 0;


const onDecrementValueEvent = () => {
    counterValue -= 1;
    return value.textContent = counterValue;
};
const onIncrementValueEvent = () => {
    counterValue += 1;
    return value.textContent = counterValue;
};


refs.btnDecrement.addEventListener('click', onDecrementValueEvent);
refs.btnIncrement.addEventListener('click', onIncrementValueEvent);