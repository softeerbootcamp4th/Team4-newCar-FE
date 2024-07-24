/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */

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

export default {
	darkMode: ['class'],
	content: ['./src/**/*.{ts,tsx}'],
	prefix: '',
	theme: {
		extend: {
			colors,
			backgroundImage: {
				'gradient-lineBanner': 'linear-gradient(to right, #2589FF, #232AA3)',
				'gradient-cards1': 'linear-gradient(to right, #FD7A4D, #000000)',
				'gradient-cards2': 'linear-gradient(to right, #939393, #000000)',
				'gradient-gauge1': 'linear-gradient(to right, #5D85D2, #8093BB, #60E9FB)',
				'gradient-gauge2': 'linear-gradient(to right, #E0A64F, #FFF59E, #FFE500)',
				'gradient-gauge3': 'linear-gradient(to right, #D25C7F, #E37D9B, #FF3C76)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
