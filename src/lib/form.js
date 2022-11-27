// function displays an automated message
// when user enters text input,
// instead of number input
const handleKeyDown = (e) => {
	// list of allowed values
	// the Enter and Backspace should not trigger and error message
	const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Enter', 'Backspace', ' ', 'Esc'];

	// if supplied input is not in arr,
	// report the error by setting a custom message
	const exists = arr.includes(e.key);
	if (!exists) {
		e.target.setCustomValidity('Only numbers allowed');
		e.target.reportValidity();
	} else {
		// remove message
		e.target.setCustomValidity('');
	}
};

// function to display appropriate error message,
// for each element in a collection of html elements
const showErrors = (formElements) => {
	// Convert collection to an iterable
	formElements = Array.from(formElements);
	// Verify all elements are of type text,
	// and filter out any that are not
	formElements = formElements.filter((el) => el.type === 'text');
	console.log(formElements);
	// For each element show the appropriate error message
	formElements.forEach((el) => showError(el));
};

// function to display appropriate error message,
// for an individual element.
const showError = (el) => {
	// We are only interested in one validation constraint
	// .i.e `required`.

	let errorElement = el.nextElementSibling.firstElementChild; // Select the span nested in the div,
	// following the input element
	// If element is empty
	if (el.validity.valueMissing) {
		// style element appropriately
		errorElement.textContent = "Can't be blank";
		el.style.border = '0.05rem solid red';
	} else {
		// If element is not empty,
		// remove validation errors
		errorElement.textContent = '';
		el.style = '';
	}

};

export { handleKeyDown, showErrors, showError };
