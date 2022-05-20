const refs = {
    ingredients: document.querySelector("#ingredients"),

}

const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const ingredientsList = ingredients.map(element => {
    const ingredientItemEl = document.createElement("li");
    ingredientItemEl.classList.add("item");
    ingredientItemEl.textContent = element;

    return ingredientItemEl;
});

refs.ingredients.append(...ingredientsList);