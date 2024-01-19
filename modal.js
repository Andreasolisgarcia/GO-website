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
  const isValidEmail = validateEmail();
  const isLocationSelected = validateRadios();
  const isAnumberSelected = validateNumberOfturnements();
  const isBirthdate = validateBirthdate();
  const isConditionsAccepted = validateConditions();

  return (
    isValidFirstName &&
    isValidLastName &&
    isValidEmail &&
    isLocationSelected &&
    isAnumberSelected &&
    isBirthdate &&
    isConditionsAccepted
  );
}

function createErrorElement(element, errorName = element.id + "Error") {
  const existingErrorElement = document.getElementById(errorName);

  if (existingErrorElement) {
    existingErrorElement.innerHTML= ""
    return existingErrorElement;
  }

  const errorElement = document.createElement("div");
  errorElement.id = errorName;
  errorElement.className = "error";
  element.parentNode.appendChild(errorElement);

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
  var errorElement = createErrorElement(inputElement);

  const inputValue = inputElement.value;
  const nameOrLastInFrench = nameOrLast === "first" ? "prénom" : "nom";

  if (inputValue === "" || inputValue === null || inputValue.length === 1) {
 
    errorElement.innerHTML = `Veuillez entrer 2 caractères ou plus pour le champ du ${nameOrLastInFrench}.`;
    return false;
  }

  return true;
}

function validateEmail() {
  const elements = getElementsAndClearError("email");
  const inputElement = elements.inputElement;
  var errorElement = createErrorElement(inputElement);
  const inputValue = inputElement.value;

  if (inputValue === "") {
    errorElement.innerHTML = "Veuillez donner un email";
    return false;
  }

  const isValidEmail = isEmail(inputValue);

  if (!isValidEmail) {
    errorElement.innerHTML = "Veuillez entrer un mail valide";
    return false;
  }

  return true;
}

function isEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function validateBirthdate() {
  const elements = getElementsAndClearError("birthdate");
  const inputElement = elements.inputElement;
  var errorElement = createErrorElement(inputElement);
  const inputValue = inputElement.value;

  if (inputValue === "" || inputValue === null) {
    
    errorElement.innerHTML = `Veuillez selectioner une date de naissance`;
    return false;
  }
  return true;
}

function validateNumberOfturnements() {
  const elements = getElementsAndClearError("quantity");
  const inputElement = elements.inputElement;
  var errorElement = createErrorElement(inputElement);
  const inputValue = inputElement.value;

  if (inputValue === "" || inputValue === null) {
    errorElement.innerHTML = `Veuillez selectioner un numéro`;
    return false;
  }
  return true;
}

function validateRadios() {
  const locationRadios = document.getElementsByName("location");
  var locationError = createErrorElement(locationRadios[0], "locationError");


  var count = 0;
  locationRadios.forEach((locationRadio) =>
    locationRadio.checked ? (count += 1) : (count += 0)
  );

  if (count === 0) {
    locationError.innerHTML = "Veulliez selectioner une ville";
  }
}

function validateConditions() {
  const elements = getElementsAndClearError("checkbox1");
  const inputElement = elements.inputElement;
  var errorElement = createErrorElement(inputElement, "conditionsError");

  if (!inputElement.checked) {
    
    errorElement.innerHTML = "Veuillez accepter les termes et conditions";
    return false;
  }
  return true;
}
