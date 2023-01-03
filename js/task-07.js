const fontSelector = document.querySelector(`#font-size-control`);
const changingText = document.querySelector(`#text`);
// console.log(fontSelector.value);
// console.log(changingText.textContent);
function resizeText() {
  changingText.style.fontSize = `${fontSelector.value}px`;
}
fontSelector.addEventListener(`input`, resizeText);
