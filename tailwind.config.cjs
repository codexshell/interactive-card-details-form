/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'linear-gradient-start': 'hsl(249, 99%, 64%)',
				'linear-gradient-end': 'hsl(278, 94%, 30%)',
				'n-white': 'hsl(0, 0%, 100%)',
				'n-light-grayish-violet': 'hsl(270, 3%, 87%)',
				'n-dark-grayish-violet': 'hsl(279, 6%, 55%)',
				'n-very-dark-violet': 'hsl(278, 68%, 11%)'
			},
			fontSize: {
				'body-copy': '18px'
			},
			fontFamily: {
				'space-grotesk': ['Space Grotesk', 'sans-serif']
			}
		}
	},
	plugins: []
};
