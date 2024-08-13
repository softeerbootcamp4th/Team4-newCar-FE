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

const config: Config = {
	presets: [tailwindConfig],
	content: ['./src/**/*.{js,jsx,ts,tsx}', '../common/dist/**/*.{js,jsx,ts,tsx}'],
	theme: {
		boxShadow,
		extend: {
			container,
			backgroundImage,
			keyframes,
			animation,
		},
	},
	plugins: [tailwindAnimate],
};

export default config;
