/* eslint-disable import/order */
import { colors, fontFamily, fontSize, fontWeight, spacing } from 'src/styles/theme/index.ts';
import type { Config } from 'tailwindcss';

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
};

export default tailwindConfig;
