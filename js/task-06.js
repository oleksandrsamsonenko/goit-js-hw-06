const validation = document.querySelector(`#validation-input`);

function validate() {
  if (validation.value.length === Number(validation.dataset.length)) {
    validation.classList.remove(`invalid`);
    validation.classList.add(`valid`);
  } else {
    validation.classList.remove(`valid`);
    validation.classList.add(`invalid`);
  }
}

validation.addEventListener(`blur`, validate);
// validation.addEventListener(`blur`, () => {
//   console.log(validation.value.length === Number(validation.dataset.length));
// });
