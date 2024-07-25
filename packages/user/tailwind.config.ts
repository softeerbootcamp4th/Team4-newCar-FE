/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { Config } from 'tailwindcss';

/* colors */
const colors = {
	skyblue: {
		100: '#CCEEF6',
		200: '#99DDED',
		300: '#66CCE4',
		400: '#33BBDB',
		500: '#00AAD2',
		600: '#0088A8',
		700: '#00667E',
		800: '#004454',
		900: '#00222A',
	},
	orange: {
		100: '#FFE6DA',
		200: '#FFCCB5',
		300: '#FFB391',
		400: '#FF996C',
		500: '#FF8047',
		600: '#CC6639',
		700: '#994D2B',
		800: '#66331C',
		900: '#331A0E',
	},
	khaki: {
		100: '#D6D7D4',
		200: '#AEAFA9',
		300: '#85867E',
		400: '#5D5E53',
		500: '#343628',
		600: '#2A2B20',
		700: '#1F2018',
		800: '#151610',
		900: '#0A0B08',
	},
	yellow: {
		100: '#f0f1ea',
		200: '#e1e3d6',
		300: '#d3d4c1',
		400: '#c4c6ad',
		500: '#b5b898',
		600: '#91937a',
		700: '#6d6e5b',
		800: '#484a3d',
		900: '#24251e',
	},
	cream: {
		100: '#FFFFF6',
		200: '#FFFFEE',
		300: '#FFFFE6',
		400: '#FFFFDE',
		500: '#FFFFD6',
		600: '#CCCCAB',
		700: '#999980',
		800: '#484a3d',
		900: '#33332a',
	},
	neutral: {
		100: '#D4D4D4',
		200: '#A9A9A9',
		300: '#7E7E7E',
		400: '#535353',
		500: '#282828',
		600: '#202020',
		700: '#181818',
		800: '#101010',
		900: '#080808',
	},
	primary: '#00AAD2', // skyblue-500
	background: '#000000',
	foreground: '#ffffff',
};

const backgroundImage = {
	'gradient-lineBanner': 'linear-gradient(to right, #2589FF, #232AA3)',
	'gradient-cards1': 'linear-gradient(to right, #FD7A4D, #000000)',
	'gradient-cards2': 'linear-gradient(to right, #939393, #000000)',
	'gradient-gauge1': 'linear-gradient(to right, #5D85D2, #8093BB, #60E9FB)',
	'gradient-gauge2': 'linear-gradient(to right, #E0A64F, #FFF59E, #FFE500)',
	'gradient-gauge3': 'linear-gradient(to right, #D25C7F, #E37D9B, #FF3C76)',
};

/* typography */

const fontFamily = {
	extrabold: ['Tenada', 'sans-serif'],
	bold: ['"Hyundai Sans Head KR Bold"', 'sans-serif'],
	medium: ['"Hyundai Sans Head KR Medium"', 'sans-serif'],
	normal: ['"Hyundai Sans Head KR"', 'sans-serif'],
};

type FontSize = {
	[key: string]: [
		fontSize: string,
		configuration: Partial<{
			lineHeight: string;
			letterSpacing: string;
			fontWeight: string | number;
		}>,
	];
};

const fontSize: FontSize = {
	'heading-1': ['96px', { lineHeight: '120px', letterSpacing: '-1.92px' }],
	'heading-2': ['54px', { lineHeight: '70px', letterSpacing: '-1.08px' }],
	'heading-3': ['50px', { lineHeight: '60px', letterSpacing: '-1px' }],
	'heading-4': ['38px', { lineHeight: '50px', letterSpacing: '-0.76px' }],
	'heading-5': ['32px', { lineHeight: '40px', letterSpacing: '-0.64px' }],
	'heading-6': ['30px', { lineHeight: '38px', letterSpacing: '-0.6px' }],
	'heading-7': ['50px', { lineHeight: '60px', letterSpacing: '-1px' }],
	'heading-8': ['40px', { lineHeight: '48px', letterSpacing: '-1.2px' }],
	'heading-9': ['36px', { lineHeight: '42px', letterSpacing: '-0.72px' }],
	'heading-10': ['30px', { lineHeight: '40px', letterSpacing: '-0.6px' }],
	'heading-11': ['28px', { lineHeight: '36px', letterSpacing: '-0.56px' }],
	'heading-12': ['26px', { lineHeight: '34px', letterSpacing: '-0.52px' }],
	'body-1': ['24px', { lineHeight: '32px', letterSpacing: '-0.48px' }],
	'body-2': ['22px', { lineHeight: '32px', letterSpacing: '-0.44px' }],
	'body-3': ['20px', { lineHeight: '28px', letterSpacing: '-0.4px' }],
	'body-4': ['18px', { lineHeight: '26px', letterSpacing: '0.36px' }],
	'detail-1': ['16px', { lineHeight: '24px', letterSpacing: '-0.32px' }],
	'detail-2': ['14px', { lineHeight: '22px', letterSpacing: '-0.28px' }],
	'detail-3': ['12px', { lineHeight: '20px', letterSpacing: '-0.24px' }],
};

const fontWeight = {
	extrabold: '800',
	bold: '700',
	medium: '500',
	regular: '400',
};

/* spacing */

const spacing = {
	1: '2px',
	2: '4px',
	3: '8px',
	4: '12px',
	5: '16px',
	6: '20px',
	7: '24px',
	8: '28px',
	9: '32px',
	10: '36px',
};

const config: Config = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily,
			fontSize,
			fontWeight,
			colors,
			spacing,
			backgroundImage,
		},
		plugins: [require('tailwindcss-animate')],
	},
};

export default config;