import { Config } from 'tailwindcss';
import { colors, fontFamily, fontSize, fontWeight, spacing } from './src/styles/theme/index.ts';

const tailwindConfig: Config = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily,
		fontWeight,
		fontSize,
		colors,
		borderRadius: spacing,
		gap: spacing,
		margin: spacing,
		padding: spacing,
		extend: {
			spacing,
		},
	},
	plugins: [],
};
export default tailwindConfig;
