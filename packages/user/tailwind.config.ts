import tailwindConfig from '@softeer/common/configs';
import { Config } from 'tailwindcss';
import { animation, backgroundImage, boxShadow, container, keyframes } from './src/styles/theme';

const config: Config = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		boxShadow,
		extend: {
			backgroundImage,
			keyframes,
			animation,
			container,
		},
	},
	presets: [tailwindConfig],
};

export default config;
