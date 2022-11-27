import { writable } from 'svelte/store';

const inputs = writable({
	cardHolder: '',
	cardNumber: '',
	month: '',
	year: '',
	cvc: ''
});

export { inputs };
