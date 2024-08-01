import { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';
import {
	backgroundImage,
	colors,
	fontFamily,
	fontSize,
	fontWeight,
	spacing,
} from './src/styles/theme';

const config: Config = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		fontFamily,
		fontWeight,
		colors,
		fontSize,
		boxShadow: {
			md: 'rgba(255,255,255, 0.15) 0px 5px 15px 0px',
		},
		borderRadius: spacing,
		gap: spacing,
		margin: spacing,
		padding: spacing,
		extend: {
			backgroundImage,
			spacing,
			boxShadow: {
				lg: '0px 0px 20px 0px #ffffffD0', // modal
			},
			container: {
				center: true,
				padding: '2rem',
				screens: {
					'2xl': '1920px',
				},
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(15px)' },
					'50%': { transform: 'translateY(-15px)' },
				},
				'float-reverse': {
					'0%, 100%': { transform: 'translateY(-15px)' },
					'50%': { transform: 'translateY(15px)' },
				},
				sparkle: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
				'sparkle-reverse': {
					'0%, 100%': { opacity: '0.5' },
					'50%': { opacity: '1' },
				},
			},
			animation: {
				'casper-float': 'float 2.1s ease-in-out infinite',
				'casper-float-reverse': 'float-reverse 1.2s ease-in-out infinite',
				sparkle: 'sparkle 1.5s ease-in-out infinite',
				'sparkle-reverse': 'sparkle-reverse 1.8s ease-in-out infinite',
				sparkle2: 'sparkle 2s ease-in-out infinite',
			},
		},
	},
	plugins: [tailwindAnimate],
};

export default config;
