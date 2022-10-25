/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


let s1 = document.getElementById("s1");
let sec1 = document.getElementById("section1");
s1.onclick = function () {
  sec1.scrollIntoView();
};
let s2 = document.getElementById("s2");
let sec2 = document.getElementById("section2");
s2.onclick = function () {
  sec2.scrollIntoView();
};
let s3 = document.getElementById("s3");
let sec3 = document.getElementById("section3");
s3.onclick = function () {
  sec3.scrollIntoView();
};

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;
  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }
  if (ageInput.value !== "") {
    ageValid = true;
  }
  if (userValid === 0 || ageValid === 0) {
    e.preventDefault();
  }
};
document.links[0].onclick = function (event) {
  console.log(event);
  event.preventDefault();
};
