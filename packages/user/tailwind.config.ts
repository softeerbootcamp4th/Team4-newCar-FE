/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-restricted-imports */
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
		borderRadius: spacing,
		boxShadow: {
			md: 'rgba(255,255,255, 0.35) 0px 5px 15px',
		},
		extend: {
			spacing,
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
