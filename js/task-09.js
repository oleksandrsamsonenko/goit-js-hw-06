const changeBtn = document.querySelector(`.change-color`);
const background = document.querySelector(`body`);
const colorDescr = document.querySelector(`.color`);
changeBtn.addEventListener(`click`, changeBGC);

function changeBGC() {
  let currentColor = getRandomHexColor();
  background.style.backgroundColor = currentColor;
  colorDescr.textContent = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
