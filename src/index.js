// Populate the Country select box.
import { countries } from "./countries";

const countrySelect = document.getElementById("country");

countries.forEach((country) => {
  let newCountry = document.createElement("option");
  newCountry.setAttribute("value", country);
  newCountry.textContent = country;
  countrySelect.appendChild(newCountry);
});

// Validate each field on an individual basis.
const email = document.getElementById("email");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const fields = [email, country, zipcode, password, confirm];

function validateEmail() {
  if (email.validity.valueMissing) {
    email.className = "invalid-input";
    displayError("Enter your email!", "We won't spam you, promise!");
  } else if (email.validity.typeMismatch) {
    email.className = "invalid-input";
    displayError("We need a real email!", "Enter a valid email...");
  }
}

function validateCountry() {
  if (country.validity.valueMissing) {
    country.className = "invalid-input";
    displayError("Forgot your country!", "You gotta live somewhere, right?");
  }
}

function validateZipcode() {
  if (zipcode.validity.valueMissing) {
    zipcode.className = "invalid-input";
    displayError(
      "Whoops, enter your postal code!",
      "How else can we send you junkmail?"
    );
  } else if (zipcode.validity.typeMismatch) {
    zipcode.className = "invalid-input";
    displayError("Not a valid number!", "Enter numbers only!");
  }
}

function validatePassword() {
  if (password.validity.valueMissing) {
    password.className = "invalid-input";
    displayError("Enter a password!", "Something hard to remember...");
  } else if (password.validity.tooShort) {
    password.className = "invalid-input";
    displayError("Too short!", "Must be more than 5 characters");
  }
}

function validateConfirm() {
  if (confirm.validity.valueMissing) {
    confirm.className = "invalid-input";
    displayError("Confirm your password!", "Something hard to remember...");
  } else if (confirm.validity.tooShort) {
    confirm.className = "invalid-input";
    displayError("Too short!", "Must be more than 5 characters");
  } else if (confirm.value != password.value) {
    confirm.className = "invalid-input";
    displayError("Not the same as password!", "Enter your password again.");
  }
}

// Clicking away from a field will run its validation.
email.addEventListener("blur", function () {
  clearAllErrors();
  validateEmail();
});

country.addEventListener("blur", function () {
  clearAllErrors();
  validateCountry();
});

zipcode.addEventListener("blur", function () {
  clearAllErrors();
  validateZipcode();
});

password.addEventListener("blur", function () {
  clearAllErrors();
  validatePassword();
});

confirm.addEventListener("blur", function () {
  clearAllErrors();
  validateConfirm();
});

// Hitting the submit button checks every validation at once.
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function () {
  clearAllErrors();
  checkForSuccess();
});

// Display any failed validations in an error window.
const errorWindow = document.getElementById("errors");

function displayError(errorTitle, errorBody) {
  let errorMessage = document.createElement("div");
  errorMessage.setAttribute("class", "error");

  let title = document.createElement("h3");
  title.textContent = errorTitle;
  title.setAttribute("class", "error-title");
  errorMessage.appendChild(title);

  let body = document.createElement("p");
  body.textContent = errorBody;
  body.setAttribute("class", "error-body");
  errorMessage.appendChild(body);

  errorWindow.appendChild(errorMessage);
}

function clearAllErrors() {
  while (errorWindow.firstChild) {
    errorWindow.removeChild(errorWindow.firstChild);
  }

  fields.forEach((field) => {
    field.className = "";
  });
}

// Declare victory if form submits successfully.
function checkForSuccess() {
  validateEmail();
  validateCountry();
  validateZipcode();
  validatePassword();
  validateConfirm();
  if (!errorWindow.firstChild){
    displayVictoryMessage();
  }
}

function displayVictoryMessage() {
  let victoryMessage = document.createElement("div");
  victoryMessage.setAttribute("class", "victory");
  victoryMessage.textContent = "Nice work! Signup successful!"
  errorWindow.appendChild(victoryMessage);
}