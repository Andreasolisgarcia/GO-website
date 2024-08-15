// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.classList.add("bground-open");
}

// close Fonction event

const closeBtns = document.querySelectorAll(".close");
closeBtns.forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal() {
  modalbg.classList.remove("bground-open");
}
