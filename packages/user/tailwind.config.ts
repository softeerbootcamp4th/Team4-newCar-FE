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
		backgroundImage,
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
		},
	},
	plugins: [tailwindAnimate],
};

export default config;
