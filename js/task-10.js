function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let defaultSize = 30;

// function newDiv() {
//   for (let i = 1; i <= boxesAmount.value; i += 1) {
//     boxes.insertAdjacentHTML(
//       `beforeend`,
//       `<div style = "background-color:${getRandomHexColor()}; width:${
//         30 + i * 10
//       }px; height:${30 + i * 10}px; margin:10px" ></div>`
//     );
//   }
// }

function newDiv() {
  for (let i = 1; i <= boxesAmount.value; i += 1) {
    boxes.insertAdjacentHTML(
      `beforeend`,
      `<div style = "background-color:${getRandomHexColor()}; width:${defaultSize}px; height:${defaultSize}px; margin:10px" ></div>`
    );
    defaultSize += 10;
  }
}

const boxes = document.querySelector(`#boxes`);
boxes.style.display = `flex`;
boxes.style.flexWrap = `wrap`;
boxes.style.alignItems = `center`;
boxes.style.justifyContent = `center`;
const boxesAmount = document.querySelector(`input[type="number"]`);
const createBtn = document.querySelector(`button[data-create]`);
const destroyBtn = document.querySelector(`button[data-destroy]`);

createBtn.addEventListener(`click`, newDiv);
// destroyBtn.addEventListener(`click`, () => {boxes.innerHTML = ` `});
destroyBtn.addEventListener(`click`, () => {
  boxes.innerHTML = ` `;
  defaultSize = 30;
});
