let counterValue = 0;
const currentValue = document.querySelector(`#value`);

const decrementButton = document.querySelector(`[data-action="decrement"]`);

const handleClickDecrement = () => {
  counterValue -= 1;
  // console.log(counterValue);
  currentValue.textContent = counterValue;
};
decrementButton.addEventListener(`click`, handleClickDecrement);

const incrementButton = document.querySelector(`[data-action="increment"]`);

const handleClickIncrement = () => {
  counterValue += 1;
  // console.log(counterValue);
  currentValue.textContent = counterValue;
};
incrementButton.addEventListener(`click`, handleClickIncrement);
