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
		colors,
		fontSize,
		borderRadius: spacing,
		extend: {
			spacing,
			boxShadow: {
				lg: '0px 0px 20px 0px #ffffffD0', // popup
			},
			container: {
				center: true,
				padding: '2rem',
				screens: {
					'2xl': '1920px',
				},
			},
		},
		plugins: [require('tailwindcss-animate')],
	},
};

export default config;
