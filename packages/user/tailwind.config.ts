/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-restricted-imports */

import { Config } from 'tailwindcss';
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
		extend: {
			padding: spacing,
			fontSize,
			colors,
			borderRadius: spacing,
			spacing,
		},
		plugins: [require('tailwindcss-animate')],
	},
};

export default config;
