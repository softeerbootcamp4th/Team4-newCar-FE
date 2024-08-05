/* eslint-disable import/order */
import { colors, fontFamily, fontSize, fontWeight, spacing } from 'src/styles/theme';
import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';

const tailwindConfig: Omit<Config, 'content'> = {
	theme: {
		fontFamily,
		fontWeight,
		colors,
		fontSize,
		borderRadius: spacing,
		gap: spacing,
		margin: spacing,
		padding: spacing,
		extend: {
			spacing,
		},
	},
	plugins: [tailwindAnimate],
};

export default tailwindConfig;
