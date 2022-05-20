const refs = {
    categories: document.querySelector("#categories"),
}

const amountCategoriesEl = refs.categories.childElementCount;
const categoriesItemEl = refs.categories.children;
console.log(`Number of categories: ${amountCategoriesEl}`);
for (const item of categoriesItemEl) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
}