import tailwindConfig from '@softeer/common/configs';
import {
	animation,
	backgroundImage,
	boxShadow,
	container,
	keyframes,
} from './src/styles/theme/index.ts';

const config = {
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
