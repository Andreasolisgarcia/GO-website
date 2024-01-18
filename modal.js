function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  var y = document.getElementById("main-navbar");
  if (y.className === "main-navbar") {
    y.className += " main-navbar__active";
  } else {
    y.className = "main-navbar";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close event

closeBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal Function
function closeModal() {
  modalbg.style.display = "none";
}

// Validate function (for Submit button)
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  if (!validate()) {
    e.preventDefault();
  }
});

function validate() {
  const isValidFirstName = validateNameAndLastName("first");
  const isValidLastName = validateNameAndLastName("last");

  return isValidFirstName && isValidLastName;
}

function createErrorElement(parentElement) {
  const errorElement = document.createElement("div");
  errorElement.id = parentElement.id + "Error";
  parentElement.parentNode.appendChild(errorElement);

  return errorElement;
}

function getElementsAndClearError(elementID) {
  const inputElement = document.getElementById(elementID);
  const errorElement = document.getElementById(elementID + "Error");

  if (errorElement) {
    errorElement.innerHTML = "";
  }

  return {
    inputElement: inputElement,
    errorElement: errorElement,
  };
}

function validateNameAndLastName(nameOrLast) {
  const elements = getElementsAndClearError(nameOrLast);

  const inputElement = elements.inputElement;
  var errorElement = elements.errorElement;

  const inputValue = inputElement.value;
  const nameOrLastInFrench = nameOrLast === "first" ? "prénom" : "nom";

  if (inputValue === "" || inputValue === null || inputValue.length === 1) {
    if (!errorElement) {
      errorElement = createErrorElement(inputElement);
    }

    errorElement.innerHTML = `Veuillez entrer 2 caractères ou plus pour le champ du ${nameOrLastInFrench}.`;
    return false;
  }

  return true;
}
