const display = document.getElementById("display");
let input = "";
let darkMode = false;

function appendToDisplay(value) {
	input += value;
	display.value = input;
}

function clearDisplay() {
	input = "";
	display.value = "";
}

function calculateResult() {
	try {
		display.value = eval(input);
	} catch (error) {
		display.value = "Error";
	}
}

function toggleDarkMode() {
	darkMode = !darkMode;
	const calculator = document.querySelector(".calculator");

	if (darkMode) {
		calculator.classList.add("dark-mode");
	} else {
		calculator.classList.remove("dark-mode");
	}
}