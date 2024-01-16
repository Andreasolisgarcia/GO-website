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
const closeBtn = document.querySelector('.close');

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
const form = document.getElementById('form')



function validate() {
 return nameValidation()
}


function nameValidation(){
  const firstName = document.getElementById('first').value
  const nameError = document.getElementById('nameError')

  if (firstName === '' || firstName === null) {
    nameError.innerHTML = 'Veuillez saisir un prénom.';
    return false;
  }

  if (firstName.length > 0 && firstName.length < 3) {
    nameError.innerHTML = 'Veuillez saisir un prénom valide.';
    return false;
  }

  return true;
}

form.addEventListener('submit', (e) => {
  if (!validate()) {
    e.preventDefault(); 
  } 
});
