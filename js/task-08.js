const form = document.querySelector(`.login-form`);
// const userEmail = document.querySelector(`[type=email]`);
// const userPassword = document.querySelector(`[type=password]`);
// const submitBtn = document.querySelector(`[type=submit]`);

form.addEventListener(`submit`, handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  } else {
    const user = {
      email: email.value,
      password: password.value,
    };
    console.log(user);

    event.currentTarget.reset();
  }
}
