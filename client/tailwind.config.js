/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ['src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#254A5A',
				'primary-dark': '#0F303F',
				beige: '#EAE9E8',
				accent: '#E64926',
				'beige-dark': '#CEC6C4',
				gray: '#B7C1C5',
			},
			fontFamily: {
				decor: ['Cormorant Garamond', 'serif'],
				normal: ['Jost', 'sans-serif'],
			},
			fontSize: {
				'2xl': '90px',
				xl: '50px',
				lg: '30px',
				md: '16px',
				sm: '14px',
				xs: '12px',
			},
		},
	},
	plugins: [],
};
