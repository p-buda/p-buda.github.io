/* 
	events.js - programming for the events.html
	Author: Pawel Buda
	Created: 11-19-2018
	Edited: 04-23-2019
*/

/* 
FOCUS EVENT
*/
// Make the color of the input box change when the user clicks in it
function changeColor() {  		// This is our event handler function
	this.style.backgroundColor = "yellow";
}

// Attach a "focus" event to the element
var element = document.getElementById("valueToConvert");

// Call the "changeColor" callback function when the event occurs
element.addEventListener('focus', changeColor);



/* 
BLUR EVENT, USING "EVENT" OBJECT
*/
// Use the "event" object to make your code more reusable.
function changeColor2(event) {
	if(event.type == 'focus') {
		event.target.style.backgroundColor = "yellow";
	} else if (event.type == 'blur') {
		event.target.style.backgroundColor = "white";
	}
}

// Attach a "blur" event to the element
element.addEventListener('blur', changeColor2);



/* 
MOUSEOVER EVENT
*/
function changeBkg(event) {
	if(event.type == 'mouseover') {
		event.target.style.backgroundColor = "pink";
	} else if (event.type == 'mouseout') {
		event.target.style.backgroundColor = "white";
	}
}

// Get to the button element
var btn = document.getElementById("convert");

// Attach "mouseover" and "mouseout" events to the button element
btn.addEventListener('mouseover', changeBkg);
btn.addEventListener('mouseout', changeBkg);



/* 
LOAD EVENT
*/
// Focus the cursor in the input field when the page finishes loading.
var placeToFocus = document.getElementById("valueToConvert");
window.addEventListener('load', function() {
	// You can also put the entire function as an argument to the addEventListener method.
	// We call it an anonymous function.
	placeToFocus.focus();
});




/* 
CLICK EVENT
*/
// Create a function to handle the click event
function convert() {
	// Get tho the element that stores the value to convert
	var valueToConvert = document.getElementById("valueToConvert");
	var errorMessagePlace = document.getElementById("errorMessage");
	// Get to the value itself:
	valueF = valueToConvert.value;
	try {
		if(isNaN(valueF) || valueF === '') { // If the data is not a number, display an error message by the textbox
			throw new Error("Please enter a number.")
		}
		else
			{  // If all is good, do the conversion
				// In this example, we are converting Fahrenheits to Celsius.
				valueF = Number(valueF);
				var valueC = (valueF - 32) * (5 / 9);
				valueC = Math.round(valueC);
				document.getElementById("result").value = valueC;
				// Clear the error message
				errorMessagePlace.textContent = "";
				
			}
	} catch (error) {
		var errorMessage = error.message;
		// Provide a friendly message for the user by attaching it to the div with id="errorMessage":
		errorMessagePlace.textContent = errorMessage;
	}
}

// Attach a "click" event to the button.
btn.addEventListener("click", convert);



/* 
LIGHTBULB CHALLENGE - SOLUTION CODE
*/
function lightSwitch(event) {
	if(event.type == 'mouseover') {
		event.target.setAttribute('src','img/bulbOn.png');
	} else if(event.type == 'mouseout') {
		event.target.setAttribute('src','img/bulbOff.png');
	}
}
	
	// Outside the function, find the image element by its ID.
	var myImage = document.getElementById('image');

	// Attach the event listeners to the myImage variable.
	myImage.addEventListener('mouseover', lightSwitch);
	myImage.addEventListener('mouseout', lightSwitch);
	
