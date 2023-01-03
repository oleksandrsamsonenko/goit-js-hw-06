const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector(`#ingredients`);

ingredients.forEach((item) => {
  const addIngredient = document.createElement(`li`);
  addIngredient.classList.add(`item`);
  addIngredient.textContent = item;
  list.append(addIngredient);
});
