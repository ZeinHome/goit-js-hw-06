const categorsEl = document.querySelectorAll('#categories > .item');
const categorsItemEl = `Number of categories: ${categorsEl.length}`;
console.log(categorsItemEl);

categorsEl.forEach(itemsList => {
    const title = itemsList.firstElementChild.textContent;
    const titleEl = `Category: ${title}`;

    const item = itemsList.lastElementChild.children.length;
    const itemEl = `Elements: ${item}`

    console.log(titleEl);
    console.log(itemEl);
});