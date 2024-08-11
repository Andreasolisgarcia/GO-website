// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close Fonction event

function addCloseEventToBtns() {
  const closeBtns = document.querySelectorAll(".close");
  closeBtns.forEach((btn) => btn.addEventListener("click", closeModal));
}

addCloseEventToBtns() 

// launch modal form
function launchModal() {
  modalbg.classList.add('bground-open')

}

// close modal Function
function closeModal() {
  modalbg.classList.remove('bground-open');
}