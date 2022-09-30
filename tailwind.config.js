/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class', // or 'media' or 'class'
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				homeBg: "url('/bg-light.jpg')",
				'homeBg-dark': "url('/bg-dark.jpg')"
			}
		}
	},
	variants: {
		extend: {
			backgroundImage: ['dark']
		}
	},
	plugins: [
	]
};
