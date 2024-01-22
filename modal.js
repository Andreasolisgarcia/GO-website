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
// var main = document.querySelector("main")
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close event

closeBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.classList.add('bground-open')

}

// close modal Function
function closeModal() {
  modalbg.classList.remove('bground-open');
}



// Validate function (for Submit button)
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  if (!validate()) {
    e.preventDefault();
  }

  if (validate()) {
    const modalFormBody = document.getElementById("content");
    var width = modalFormBody.offsetWidth;
    var height = modalFormBody.offsetHeight;
    confirmation("Merci pour <br> votre inscription", width, height);
  }
});

function confirmation(message, width, height) {
  const modalFormBody = document.getElementById("modalFormBody");
  const root = document.querySelector(':root')
  modalFormBody.className = "confirmation"
  modalFormBody.innerHTML = `<div class= "confirmation-content"><div class= "confirmation-message">${message}</div></div>
  <button  class="btn-submit"
  class="button">Fermer</button>`;
  root.style.setProperty('--modal-form-body-width', width +'px');
  root.style.setProperty('--modal-form-body-height', height + 'px');
}

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

const errorMessages = {
  name: "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
  emailRequired: "Veuillez donner un email.",
  invalidEmail: "Veuillez entrer un mail valide.",
  birthdate: "Veuillez selectioner une date de naissance.",
  numberOfTournaments: "Veuillez selectioner un numéro.",
  location: "Veulliez selectioner une ville.",
  conditions: "Veuillez accepter les termes et conditions.",
};
function validateNameAndLastName(nameOrLast) {
  const inputElement = document.getElementById(nameOrLast);
  removeDataErrorAttribute(inputElement);

  const inputValue = inputElement.value;
  const nameOrLastInFrench = nameOrLast === "first" ? "prénom" : "nom";

  if (inputValue === "" || inputValue === null || inputValue.length === 1) {
    const errorMessage = `Veuillez entrer 2 caractères ou plus pour le champ du ${nameOrLastInFrench}.`;
    setDataErrorAttribute(inputElement, errorMessage);
    return false;
  }

  return true;
}

function validateEmail() {
  const inputElement = document.getElementById("email");
  const inputValue = inputElement.value;

  removeDataErrorAttribute(inputElement);

  if (inputValue === "") {
    setDataErrorAttribute(inputElement, errorMessages.emailRequired);
    return false;
  }

  const isValidEmail = isEmail(inputValue);

  if (!isValidEmail) {
    errorMessage = "Veuillez entrer un mail valide";
    setDataErrorAttribute(inputElement, errorMessages.invalidEmail);
    return false;
  }

  return true;
}

function isEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function validateBirthdate() {
  return fieldNotEmpty("birthdate", errorMessages.birthdate);
}

function validateNumberOfturnements() {
  return fieldNotEmpty("quantity", errorMessages.numberOfTournaments);
}

function validateRadios() {
  const locationRadios = document.getElementsByName("location");
  removeDataErrorAttribute(locationRadios[0]);

  var count = 0;
  locationRadios.forEach((locationRadio) =>
    locationRadio.checked ? (count += 1) : (count += 0)
  );

  if (count === 0) {
    setDataErrorAttribute(locationRadios[0], errorMessages.location);
    return false;
  }
  return true;
}

function validateConditions() {
  const inputElement = document.getElementById("checkbox1");
  removeDataErrorAttribute(inputElement);

  if (!inputElement.checked) {
    setDataErrorAttribute(inputElement, errorMessages.conditions);
    return false;
  }
  return true;
}

function fieldNotEmpty(elementID, errorMessage) {
  const inputElement = document.getElementById(elementID);
  removeDataErrorAttribute(inputElement);

  const inputValue = inputElement.value;

  if (inputValue === "" || inputValue === null) {
    setDataErrorAttribute(inputElement, errorMessage);
    return false;
  }
  return true;
}

function setDataErrorAttribute(element, errorMessage) {
  const parentElement = element.parentNode;

  parentElement.setAttribute("data-error", errorMessage);
  parentElement.setAttribute("data-error-visible", "true");
}

function removeDataErrorAttribute(element) {
  const parentElement = element.parentNode;
  parentElement.removeAttribute("data-error");
  parentElement.removeAttribute("data-error-visible");
}
