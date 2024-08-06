import tailwindConfig from '@softeer/common/configs';
import { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';
import {
	animation,
	backgroundImage,
	boxShadow,
	container,
	keyframes,
} from './src/styles/theme/index.ts';

const config:Config = {
	presets: [tailwindConfig],
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		boxShadow,
		extend: {
			backgroundImage,
			keyframes,
			animation,
			container,
		},
	},
	plugins: [tailwindAnimate],
};

export default config;
