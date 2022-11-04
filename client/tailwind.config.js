/** @type {import("tailwindcss").Config} */

module.exports = {
	content: ['src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			screens: {
				'xs': {'max': '375px'},
				'mds': {'max': '768px'},
				'lgs': {'max': '1024px'},
			},
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
				avenir: ['Avenir', 'serif'],
			},
			fontSize: {
				'2xl': '90px',
				xl: '50px',
				lg: '30px',
				md: '16px',
				sm: '14px',
				xs: '12px',
			},
			keyframes: {
				'scale-in': {
					'0%': { opacity: 0, transform: 'scale(0)' },
					'100%': { opacity: 1, transform: 'scale(1)' },
				},
				'slide-down': {
					'0%': { opacity: 0, transform: 'translateY(-10px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
				'slide-up': {
					'0%': { opacity: 0, transform: 'translateY(10px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
			},
			animation: {
				'scale-in': 'scale-in 0.2s ease-in-out',
				'slide-down': 'slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
				'slide-up': 'slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
			},
		},
	},
	plugins: [require('tailwindcss-radix')],
};
