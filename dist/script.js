/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/countries.js":
/*!**************************!*\
  !*** ./src/countries.js ***!
  \**************************/
/*! exports provided: countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return countries; });
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua & Deps",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Rep",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo {Democratic Rep}",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland {Republic}",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea North",
  "Korea South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar, {Burma}",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "St Kitts & Nevis",
  "St Lucia",
  "Saint Vincent & the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome & Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad & Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countries */ "./src/countries.js");
// Populate the Country select box.


const countrySelect = document.getElementById("country");

_countries__WEBPACK_IMPORTED_MODULE_0__["countries"].forEach((country) => {
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvdW50cmllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGVBQWU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JNQTtBQUFBO0FBQUE7QUFDd0M7O0FBRXhDOztBQUVBLG9EQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IGNvdW50cmllcyA9IFtcbiAgXCJBZmdoYW5pc3RhblwiLFxuICBcIkFsYmFuaWFcIixcbiAgXCJBbGdlcmlhXCIsXG4gIFwiQW5kb3JyYVwiLFxuICBcIkFuZ29sYVwiLFxuICBcIkFudGlndWEgJiBEZXBzXCIsXG4gIFwiQXJnZW50aW5hXCIsXG4gIFwiQXJtZW5pYVwiLFxuICBcIkF1c3RyYWxpYVwiLFxuICBcIkF1c3RyaWFcIixcbiAgXCJBemVyYmFpamFuXCIsXG4gIFwiQmFoYW1hc1wiLFxuICBcIkJhaHJhaW5cIixcbiAgXCJCYW5nbGFkZXNoXCIsXG4gIFwiQmFyYmFkb3NcIixcbiAgXCJCZWxhcnVzXCIsXG4gIFwiQmVsZ2l1bVwiLFxuICBcIkJlbGl6ZVwiLFxuICBcIkJlbmluXCIsXG4gIFwiQmh1dGFuXCIsXG4gIFwiQm9saXZpYVwiLFxuICBcIkJvc25pYSBIZXJ6ZWdvdmluYVwiLFxuICBcIkJvdHN3YW5hXCIsXG4gIFwiQnJhemlsXCIsXG4gIFwiQnJ1bmVpXCIsXG4gIFwiQnVsZ2FyaWFcIixcbiAgXCJCdXJraW5hXCIsXG4gIFwiQnVydW5kaVwiLFxuICBcIkNhbWJvZGlhXCIsXG4gIFwiQ2FtZXJvb25cIixcbiAgXCJDYW5hZGFcIixcbiAgXCJDYXBlIFZlcmRlXCIsXG4gIFwiQ2VudHJhbCBBZnJpY2FuIFJlcFwiLFxuICBcIkNoYWRcIixcbiAgXCJDaGlsZVwiLFxuICBcIkNoaW5hXCIsXG4gIFwiQ29sb21iaWFcIixcbiAgXCJDb21vcm9zXCIsXG4gIFwiQ29uZ29cIixcbiAgXCJDb25nbyB7RGVtb2NyYXRpYyBSZXB9XCIsXG4gIFwiQ29zdGEgUmljYVwiLFxuICBcIkNyb2F0aWFcIixcbiAgXCJDdWJhXCIsXG4gIFwiQ3lwcnVzXCIsXG4gIFwiQ3plY2ggUmVwdWJsaWNcIixcbiAgXCJEZW5tYXJrXCIsXG4gIFwiRGppYm91dGlcIixcbiAgXCJEb21pbmljYVwiLFxuICBcIkRvbWluaWNhbiBSZXB1YmxpY1wiLFxuICBcIkVhc3QgVGltb3JcIixcbiAgXCJFY3VhZG9yXCIsXG4gIFwiRWd5cHRcIixcbiAgXCJFbCBTYWx2YWRvclwiLFxuICBcIkVxdWF0b3JpYWwgR3VpbmVhXCIsXG4gIFwiRXJpdHJlYVwiLFxuICBcIkVzdG9uaWFcIixcbiAgXCJFdGhpb3BpYVwiLFxuICBcIkZpamlcIixcbiAgXCJGaW5sYW5kXCIsXG4gIFwiRnJhbmNlXCIsXG4gIFwiR2Fib25cIixcbiAgXCJHYW1iaWFcIixcbiAgXCJHZW9yZ2lhXCIsXG4gIFwiR2VybWFueVwiLFxuICBcIkdoYW5hXCIsXG4gIFwiR3JlZWNlXCIsXG4gIFwiR3JlbmFkYVwiLFxuICBcIkd1YXRlbWFsYVwiLFxuICBcIkd1aW5lYVwiLFxuICBcIkd1aW5lYS1CaXNzYXVcIixcbiAgXCJHdXlhbmFcIixcbiAgXCJIYWl0aVwiLFxuICBcIkhvbmR1cmFzXCIsXG4gIFwiSHVuZ2FyeVwiLFxuICBcIkljZWxhbmRcIixcbiAgXCJJbmRpYVwiLFxuICBcIkluZG9uZXNpYVwiLFxuICBcIklyYW5cIixcbiAgXCJJcmFxXCIsXG4gIFwiSXJlbGFuZCB7UmVwdWJsaWN9XCIsXG4gIFwiSXNyYWVsXCIsXG4gIFwiSXRhbHlcIixcbiAgXCJJdm9yeSBDb2FzdFwiLFxuICBcIkphbWFpY2FcIixcbiAgXCJKYXBhblwiLFxuICBcIkpvcmRhblwiLFxuICBcIkthemFraHN0YW5cIixcbiAgXCJLZW55YVwiLFxuICBcIktpcmliYXRpXCIsXG4gIFwiS29yZWEgTm9ydGhcIixcbiAgXCJLb3JlYSBTb3V0aFwiLFxuICBcIktvc292b1wiLFxuICBcIkt1d2FpdFwiLFxuICBcIkt5cmd5enN0YW5cIixcbiAgXCJMYW9zXCIsXG4gIFwiTGF0dmlhXCIsXG4gIFwiTGViYW5vblwiLFxuICBcIkxlc290aG9cIixcbiAgXCJMaWJlcmlhXCIsXG4gIFwiTGlieWFcIixcbiAgXCJMaWVjaHRlbnN0ZWluXCIsXG4gIFwiTGl0aHVhbmlhXCIsXG4gIFwiTHV4ZW1ib3VyZ1wiLFxuICBcIk1hY2Vkb25pYVwiLFxuICBcIk1hZGFnYXNjYXJcIixcbiAgXCJNYWxhd2lcIixcbiAgXCJNYWxheXNpYVwiLFxuICBcIk1hbGRpdmVzXCIsXG4gIFwiTWFsaVwiLFxuICBcIk1hbHRhXCIsXG4gIFwiTWFyc2hhbGwgSXNsYW5kc1wiLFxuICBcIk1hdXJpdGFuaWFcIixcbiAgXCJNYXVyaXRpdXNcIixcbiAgXCJNZXhpY29cIixcbiAgXCJNaWNyb25lc2lhXCIsXG4gIFwiTW9sZG92YVwiLFxuICBcIk1vbmFjb1wiLFxuICBcIk1vbmdvbGlhXCIsXG4gIFwiTW9udGVuZWdyb1wiLFxuICBcIk1vcm9jY29cIixcbiAgXCJNb3phbWJpcXVlXCIsXG4gIFwiTXlhbm1hciwge0J1cm1hfVwiLFxuICBcIk5hbWliaWFcIixcbiAgXCJOYXVydVwiLFxuICBcIk5lcGFsXCIsXG4gIFwiTmV0aGVybGFuZHNcIixcbiAgXCJOZXcgWmVhbGFuZFwiLFxuICBcIk5pY2FyYWd1YVwiLFxuICBcIk5pZ2VyXCIsXG4gIFwiTmlnZXJpYVwiLFxuICBcIk5vcndheVwiLFxuICBcIk9tYW5cIixcbiAgXCJQYWtpc3RhblwiLFxuICBcIlBhbGF1XCIsXG4gIFwiUGFuYW1hXCIsXG4gIFwiUGFwdWEgTmV3IEd1aW5lYVwiLFxuICBcIlBhcmFndWF5XCIsXG4gIFwiUGVydVwiLFxuICBcIlBoaWxpcHBpbmVzXCIsXG4gIFwiUG9sYW5kXCIsXG4gIFwiUG9ydHVnYWxcIixcbiAgXCJRYXRhclwiLFxuICBcIlJvbWFuaWFcIixcbiAgXCJSdXNzaWFuIEZlZGVyYXRpb25cIixcbiAgXCJSd2FuZGFcIixcbiAgXCJTdCBLaXR0cyAmIE5ldmlzXCIsXG4gIFwiU3QgTHVjaWFcIixcbiAgXCJTYWludCBWaW5jZW50ICYgdGhlIEdyZW5hZGluZXNcIixcbiAgXCJTYW1vYVwiLFxuICBcIlNhbiBNYXJpbm9cIixcbiAgXCJTYW8gVG9tZSAmIFByaW5jaXBlXCIsXG4gIFwiU2F1ZGkgQXJhYmlhXCIsXG4gIFwiU2VuZWdhbFwiLFxuICBcIlNlcmJpYVwiLFxuICBcIlNleWNoZWxsZXNcIixcbiAgXCJTaWVycmEgTGVvbmVcIixcbiAgXCJTaW5nYXBvcmVcIixcbiAgXCJTbG92YWtpYVwiLFxuICBcIlNsb3ZlbmlhXCIsXG4gIFwiU29sb21vbiBJc2xhbmRzXCIsXG4gIFwiU29tYWxpYVwiLFxuICBcIlNvdXRoIEFmcmljYVwiLFxuICBcIlNvdXRoIFN1ZGFuXCIsXG4gIFwiU3BhaW5cIixcbiAgXCJTcmkgTGFua2FcIixcbiAgXCJTdWRhblwiLFxuICBcIlN1cmluYW1lXCIsXG4gIFwiU3dhemlsYW5kXCIsXG4gIFwiU3dlZGVuXCIsXG4gIFwiU3dpdHplcmxhbmRcIixcbiAgXCJTeXJpYVwiLFxuICBcIlRhaXdhblwiLFxuICBcIlRhamlraXN0YW5cIixcbiAgXCJUYW56YW5pYVwiLFxuICBcIlRoYWlsYW5kXCIsXG4gIFwiVG9nb1wiLFxuICBcIlRvbmdhXCIsXG4gIFwiVHJpbmlkYWQgJiBUb2JhZ29cIixcbiAgXCJUdW5pc2lhXCIsXG4gIFwiVHVya2V5XCIsXG4gIFwiVHVya21lbmlzdGFuXCIsXG4gIFwiVHV2YWx1XCIsXG4gIFwiVWdhbmRhXCIsXG4gIFwiVWtyYWluZVwiLFxuICBcIlVuaXRlZCBBcmFiIEVtaXJhdGVzXCIsXG4gIFwiVW5pdGVkIEtpbmdkb21cIixcbiAgXCJVbml0ZWQgU3RhdGVzXCIsXG4gIFwiVXJ1Z3VheVwiLFxuICBcIlV6YmVraXN0YW5cIixcbiAgXCJWYW51YXR1XCIsXG4gIFwiVmF0aWNhbiBDaXR5XCIsXG4gIFwiVmVuZXp1ZWxhXCIsXG4gIFwiVmlldG5hbVwiLFxuICBcIlllbWVuXCIsXG4gIFwiWmFtYmlhXCIsXG4gIFwiWmltYmFid2VcIixcbl07XG5cbmV4cG9ydCB7IGNvdW50cmllcyB9OyIsIi8vIFBvcHVsYXRlIHRoZSBDb3VudHJ5IHNlbGVjdCBib3guXG5pbXBvcnQgeyBjb3VudHJpZXMgfSBmcm9tIFwiLi9jb3VudHJpZXNcIjtcblxuY29uc3QgY291bnRyeVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnRyeVwiKTtcblxuY291bnRyaWVzLmZvckVhY2goKGNvdW50cnkpID0+IHtcbiAgbGV0IG5ld0NvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBuZXdDb3VudHJ5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGNvdW50cnkpO1xuICBuZXdDb3VudHJ5LnRleHRDb250ZW50ID0gY291bnRyeTtcbiAgY291bnRyeVNlbGVjdC5hcHBlbmRDaGlsZChuZXdDb3VudHJ5KTtcbn0pO1xuXG4vLyBWYWxpZGF0ZSBlYWNoIGZpZWxkIG9uIGFuIGluZGl2aWR1YWwgYmFzaXMuXG5jb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIik7XG5jb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudHJ5XCIpO1xuY29uc3QgemlwY29kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiemlwY29kZVwiKTtcbmNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFwiKTtcbmNvbnN0IGNvbmZpcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmZpcm1cIik7XG5jb25zdCBmaWVsZHMgPSBbZW1haWwsIGNvdW50cnksIHppcGNvZGUsIHBhc3N3b3JkLCBjb25maXJtXTtcblxuZnVuY3Rpb24gdmFsaWRhdGVFbWFpbCgpIHtcbiAgaWYgKGVtYWlsLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIGVtYWlsLmNsYXNzTmFtZSA9IFwiaW52YWxpZC1pbnB1dFwiO1xuICAgIGRpc3BsYXlFcnJvcihcIkVudGVyIHlvdXIgZW1haWwhXCIsIFwiV2Ugd29uJ3Qgc3BhbSB5b3UsIHByb21pc2UhXCIpO1xuICB9IGVsc2UgaWYgKGVtYWlsLnZhbGlkaXR5LnR5cGVNaXNtYXRjaCkge1xuICAgIGVtYWlsLmNsYXNzTmFtZSA9IFwiaW52YWxpZC1pbnB1dFwiO1xuICAgIGRpc3BsYXlFcnJvcihcIldlIG5lZWQgYSByZWFsIGVtYWlsIVwiLCBcIkVudGVyIGEgdmFsaWQgZW1haWwuLi5cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDb3VudHJ5KCkge1xuICBpZiAoY291bnRyeS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICBjb3VudHJ5LmNsYXNzTmFtZSA9IFwiaW52YWxpZC1pbnB1dFwiO1xuICAgIGRpc3BsYXlFcnJvcihcIkZvcmdvdCB5b3VyIGNvdW50cnkhXCIsIFwiWW91IGdvdHRhIGxpdmUgc29tZXdoZXJlLCByaWdodD9cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVaaXBjb2RlKCkge1xuICBpZiAoemlwY29kZS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICB6aXBjb2RlLmNsYXNzTmFtZSA9IFwiaW52YWxpZC1pbnB1dFwiO1xuICAgIGRpc3BsYXlFcnJvcihcbiAgICAgIFwiV2hvb3BzLCBlbnRlciB5b3VyIHBvc3RhbCBjb2RlIVwiLFxuICAgICAgXCJIb3cgZWxzZSBjYW4gd2Ugc2VuZCB5b3UganVua21haWw/XCJcbiAgICApO1xuICB9IGVsc2UgaWYgKHppcGNvZGUudmFsaWRpdHkudHlwZU1pc21hdGNoKSB7XG4gICAgemlwY29kZS5jbGFzc05hbWUgPSBcImludmFsaWQtaW5wdXRcIjtcbiAgICBkaXNwbGF5RXJyb3IoXCJOb3QgYSB2YWxpZCBudW1iZXIhXCIsIFwiRW50ZXIgbnVtYmVycyBvbmx5IVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKCkge1xuICBpZiAocGFzc3dvcmQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgcGFzc3dvcmQuY2xhc3NOYW1lID0gXCJpbnZhbGlkLWlucHV0XCI7XG4gICAgZGlzcGxheUVycm9yKFwiRW50ZXIgYSBwYXNzd29yZCFcIiwgXCJTb21ldGhpbmcgaGFyZCB0byByZW1lbWJlci4uLlwiKTtcbiAgfSBlbHNlIGlmIChwYXNzd29yZC52YWxpZGl0eS50b29TaG9ydCkge1xuICAgIHBhc3N3b3JkLmNsYXNzTmFtZSA9IFwiaW52YWxpZC1pbnB1dFwiO1xuICAgIGRpc3BsYXlFcnJvcihcIlRvbyBzaG9ydCFcIiwgXCJNdXN0IGJlIG1vcmUgdGhhbiA1IGNoYXJhY3RlcnNcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDb25maXJtKCkge1xuICBpZiAoY29uZmlybS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICBjb25maXJtLmNsYXNzTmFtZSA9IFwiaW52YWxpZC1pbnB1dFwiO1xuICAgIGRpc3BsYXlFcnJvcihcIkNvbmZpcm0geW91ciBwYXNzd29yZCFcIiwgXCJTb21ldGhpbmcgaGFyZCB0byByZW1lbWJlci4uLlwiKTtcbiAgfSBlbHNlIGlmIChjb25maXJtLnZhbGlkaXR5LnRvb1Nob3J0KSB7XG4gICAgY29uZmlybS5jbGFzc05hbWUgPSBcImludmFsaWQtaW5wdXRcIjtcbiAgICBkaXNwbGF5RXJyb3IoXCJUb28gc2hvcnQhXCIsIFwiTXVzdCBiZSBtb3JlIHRoYW4gNSBjaGFyYWN0ZXJzXCIpO1xuICB9IGVsc2UgaWYgKGNvbmZpcm0udmFsdWUgIT0gcGFzc3dvcmQudmFsdWUpIHtcbiAgICBjb25maXJtLmNsYXNzTmFtZSA9IFwiaW52YWxpZC1pbnB1dFwiO1xuICAgIGRpc3BsYXlFcnJvcihcIk5vdCB0aGUgc2FtZSBhcyBwYXNzd29yZCFcIiwgXCJFbnRlciB5b3VyIHBhc3N3b3JkIGFnYWluLlwiKTtcbiAgfVxufVxuXG4vLyBDbGlja2luZyBhd2F5IGZyb20gYSBmaWVsZCB3aWxsIHJ1biBpdHMgdmFsaWRhdGlvbi5cbmVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgY2xlYXJBbGxFcnJvcnMoKTtcbiAgdmFsaWRhdGVFbWFpbCgpO1xufSk7XG5cbmNvdW50cnkuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24gKCkge1xuICBjbGVhckFsbEVycm9ycygpO1xuICB2YWxpZGF0ZUNvdW50cnkoKTtcbn0pO1xuXG56aXBjb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgY2xlYXJBbGxFcnJvcnMoKTtcbiAgdmFsaWRhdGVaaXBjb2RlKCk7XG59KTtcblxucGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24gKCkge1xuICBjbGVhckFsbEVycm9ycygpO1xuICB2YWxpZGF0ZVBhc3N3b3JkKCk7XG59KTtcblxuY29uZmlybS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBmdW5jdGlvbiAoKSB7XG4gIGNsZWFyQWxsRXJyb3JzKCk7XG4gIHZhbGlkYXRlQ29uZmlybSgpO1xufSk7XG5cbi8vIEhpdHRpbmcgdGhlIHN1Ym1pdCBidXR0b24gY2hlY2tzIGV2ZXJ5IHZhbGlkYXRpb24gYXQgb25jZS5cbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgY2xlYXJBbGxFcnJvcnMoKTtcbiAgY2hlY2tGb3JTdWNjZXNzKCk7XG59KTtcblxuLy8gRGlzcGxheSBhbnkgZmFpbGVkIHZhbGlkYXRpb25zIGluIGFuIGVycm9yIHdpbmRvdy5cbmNvbnN0IGVycm9yV2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvcnNcIik7XG5cbmZ1bmN0aW9uIGRpc3BsYXlFcnJvcihlcnJvclRpdGxlLCBlcnJvckJvZHkpIHtcbiAgbGV0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVycm9yTWVzc2FnZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVycm9yXCIpO1xuXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBlcnJvclRpdGxlO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVycm9yLXRpdGxlXCIpO1xuICBlcnJvck1lc3NhZ2UuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGxldCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJvZHkudGV4dENvbnRlbnQgPSBlcnJvckJvZHk7XG4gIGJvZHkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlcnJvci1ib2R5XCIpO1xuICBlcnJvck1lc3NhZ2UuYXBwZW5kQ2hpbGQoYm9keSk7XG5cbiAgZXJyb3JXaW5kb3cuYXBwZW5kQ2hpbGQoZXJyb3JNZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJBbGxFcnJvcnMoKSB7XG4gIHdoaWxlIChlcnJvcldpbmRvdy5maXJzdENoaWxkKSB7XG4gICAgZXJyb3JXaW5kb3cucmVtb3ZlQ2hpbGQoZXJyb3JXaW5kb3cuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBmaWVsZC5jbGFzc05hbWUgPSBcIlwiO1xuICB9KTtcbn1cblxuLy8gRGVjbGFyZSB2aWN0b3J5IGlmIGZvcm0gc3VibWl0cyBzdWNjZXNzZnVsbHkuXG5mdW5jdGlvbiBjaGVja0ZvclN1Y2Nlc3MoKSB7XG4gIHZhbGlkYXRlRW1haWwoKTtcbiAgdmFsaWRhdGVDb3VudHJ5KCk7XG4gIHZhbGlkYXRlWmlwY29kZSgpO1xuICB2YWxpZGF0ZVBhc3N3b3JkKCk7XG4gIHZhbGlkYXRlQ29uZmlybSgpO1xuICBpZiAoIWVycm9yV2luZG93LmZpcnN0Q2hpbGQpe1xuICAgIGRpc3BsYXlWaWN0b3J5TWVzc2FnZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlWaWN0b3J5TWVzc2FnZSgpIHtcbiAgbGV0IHZpY3RvcnlNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdmljdG9yeU1lc3NhZ2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ2aWN0b3J5XCIpO1xuICB2aWN0b3J5TWVzc2FnZS50ZXh0Q29udGVudCA9IFwiTmljZSB3b3JrISBTaWdudXAgc3VjY2Vzc2Z1bCFcIlxuICBlcnJvcldpbmRvdy5hcHBlbmRDaGlsZCh2aWN0b3J5TWVzc2FnZSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==