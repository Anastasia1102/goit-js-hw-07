const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

const handleInput = (event) => {
  span.textContent = event.currentTarget.value.trim() || "Anonymous";
};

input.addEventListener("input", handleInput);

const header = document.querySelector("h1");
header.classList.add("header");
