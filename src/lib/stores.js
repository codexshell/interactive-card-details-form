import { writable } from 'svelte/store';

export const inputs = writable({
	number: '0000 0000 0000 0000',
	name: 'Jane Appleseed',
	month: '00',
	year: '00',
	cvc: '000'
});
