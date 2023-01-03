const inputValue = document.querySelector(`#name-input`);
const spanValue = document.querySelector(`#name-output`);

const userName = () => {
  //   if (inputValue.value !== ``) {
  //     spanValue.textContent = inputValue.value;
  //   } else {
  //     spanValue.textContent = `Anonymous`;
  //     }

  inputValue.value === ``
    ? (spanValue.textContent = `Anonymous`)
    : (spanValue.textContent = inputValue.value);

  //   switch (inputValue.value) {
  //     case "":
  //       spanValue.textContent = `Anonymous`;
  //       break;

  //     default:
  //       spanValue.textContent = inputValue.value;
  //   }
};

inputValue.addEventListener(`input`, userName);
