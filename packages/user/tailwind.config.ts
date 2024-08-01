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
				rotate1: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'20%, 80%': { transform: 'rotate(3deg)' },
					'40%, 60%': { transform: 'rotate(-3deg)' },
				},
				rotate2: {
					'0%, 100%': { transform: 'rotate(3deg)' },
					'20%, 80%': { transform: 'rotate(-3deg)' },
					'40%, 60%': { transform: 'rotate(3deg)' },
				},
				rotate3: {
					'0%, 100%': { transform: 'rotate(-4deg)' },
					'20%, 80%': { transform: 'rotate(4deg)' },
					'40%, 60%': { transform: 'rotate(-4deg)' },
				},
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
				rotate1: 'rotate1 1s ease-in-out 5 forwards',
				rotate2: 'rotate2 1s ease-in-out 5 forwards',
				rotate3: 'rotate3 1s ease-in-out 5 forwards',
			},
		},
	},
	plugins: [tailwindAnimate],
};

export default config;
