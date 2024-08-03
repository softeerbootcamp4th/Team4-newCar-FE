import { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';
import {
	animation,
	backgroundImage,
	boxShadow,
	colors,
	container,
	fontFamily,
	fontSize,
	fontWeight,
	keyframes,
	spacing,
} from './src/styles/theme';

const config: Config = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		fontFamily,
		fontWeight,
		colors,
		fontSize,
		borderRadius: spacing,
		gap: spacing,
		margin: spacing,
		padding: spacing,
		boxShadow,
		extend: {
			backgroundImage,
			spacing,
			keyframes,
			animation,
			container,
		},
	},
	plugins: [tailwindAnimate],
};

export default config;
