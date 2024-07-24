const fontFamily = {
	extrabold: ['Tenada', 'sans-serif'],
	bold: ['"Hyundai Sans Head KR Bold"', 'sans-serif'],
	medium: ['"Hyundai Sans Head KR Medium"', 'sans-serif'],
	normal: ['"Hyundai Sans Head KR"', 'sans-serif'],
};

const fontSize = {
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

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./src/**/*.{ts,tsx}'],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily,
			fontSize,
			fontWeight,
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
