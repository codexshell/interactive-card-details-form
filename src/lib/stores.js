import { writable } from 'svelte/store';

export const inputs = writable({
	cardNumber: '0000 0000 0000 0000',
	cardHolder: 'Jane Appleseed',
	month: '00',
	year: '00',
	cvc: '000'
});
