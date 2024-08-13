const keyframes = {
	rotate: {
		'0%, 100%': { transform: 'rotate(-1deg)' },
		'50%': { transform: 'rotate(1deg)' },
	},
	rotate1: {
		'0%, 100%': { transform: 'rotate(-3deg)' },
		'20%, 80%': { transform: 'rotate(3deg)' },
		'40%, 60%': { transform: 'rotate(-3deg)' },
	},
	rotate2: {
		'0%, 100%': { transform: 'rotate(3deg)' },
		'20%, 80%': { transform: 'rotate(-3deg)' },
		'40%, 60%': { transform: 'rotate(3deg)' },
	},
	rotate3: {
		'0%, 100%': { transform: 'rotate(-4deg)' },
		'20%, 80%': { transform: 'rotate(4deg)' },
		'40%, 60%': { transform: 'rotate(-4deg)' },
	},
	float: {
		'0%, 100%': { transform: 'translateY(15px)' },
		'50%': { transform: 'translateY(-15px)' },
	},
	'float-reverse': {
		'0%, 100%': { transform: 'translateY(-15px)' },
		'50%': { transform: 'translateY(15px)' },
	},
	sparkle: {
		'0%, 100%': { opacity: '1' },
		'50%': { opacity: '0.5' },
	},
	'sparkle-reverse': {
		'0%, 100%': { opacity: '0.5' },
		'50%': { opacity: '1' },
	},
};

const animation = {
	'casper-float': 'float 2.1s ease-in-out infinite',
	'casper-float-reverse': 'float-reverse 1.2s ease-in-out infinite',
	sparkle: 'sparkle 1.5s ease-in-out infinite',
	'sparkle-reverse': 'sparkle-reverse 1.8s ease-in-out infinite',
	sparkle2: 'sparkle 2s ease-in-out infinite',
	rotate: 'rotate 0.3s ease-in-out',
	rotate1: 'rotate1 1s ease-in-out 5 forwards',
	rotate2: 'rotate2 1s ease-in-out 5 forwards',
	rotate3: 'rotate3 1s ease-in-out 5 forwards',
};

export { animation, keyframes };
