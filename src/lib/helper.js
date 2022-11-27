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

export { handleKeyDown };
