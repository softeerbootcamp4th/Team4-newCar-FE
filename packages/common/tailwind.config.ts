import { colors, fontFamily, fontSize, fontWeight, spacing } from './src/styles/theme/index.ts';

const tailwindConfig = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily,
		fontWeight,
		fontSize,
		borderRadius: spacing,
		gap: spacing,
		margin: spacing,
		padding: spacing,
		extend: {
			colors,
			spacing,
		},
	},
	plugins: [],
};
export default tailwindConfig;
