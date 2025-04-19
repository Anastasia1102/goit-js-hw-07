const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  const form = evt.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  console.log(`Email: ${email} 
Password: ${password}`);

  form.reset();
}

// for CSS

const inputName = document.querySelectorAll("label");
inputName.forEach((inputName) => inputName.classList.add("input-name"));

const button = document.querySelector("button");
button.classList.add("login-button");

const input = document.querySelectorAll("input");
input.forEach((input) => input.classList.add("form-input"));
