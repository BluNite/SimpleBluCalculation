// Calculator Logic

// const for "display" id
const display = document.getElementById("display");

// function to set text to display
function appendToDisplay(input) {
	// use value property to add display text to input parameter
	display.value += input;
};

// function to set display text value to = ""
function clearDisplay() {
	// display clear set to ""
	display.value = "";
};

// function to calculate display value
function calculate() {
	// try catch block for error handling of syntax errors
	try {
		//eval() method evaluates and executes statements
		display.value = eval(display.value);
	}

	// catch block for errors
	catch (error) {
		display.value = "Error"
	}
};