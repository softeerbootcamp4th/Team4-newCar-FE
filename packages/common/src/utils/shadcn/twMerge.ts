import { colors, fontSize } from 'src/styles/theme/index.ts';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
	extend: {
		classGroups: {
			'font-size': Object.keys(fontSize).map((size) => `text-${size}`),
			'text-color': Object.keys(colors).map((color) => `text-${color}`),
		},
	},
});

export default twMerge;
