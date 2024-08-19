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
	fold: {
		'0%': { transform: 'rotateX(0deg)' },
		'100%': { transform: 'rotateX(-90deg)' },
	},
	unfold: {
		'0%': { transform: 'rotateX(90deg)' },
		'100%': { transform: 'rotateX(0deg)' },
	},
	'special-my-casper': {
		'0%, 100%': { transform: 'translateY(0) scale(1)' },
		'50%': { transform: 'translateY(-10px) scale(1.05)' },
	},
	engineStart: {
		'0%': { transform: 'scale(1) translateX(0) translateY(0)' },
		'20%': { transform: 'scale(1.02) translateX(2px) translateY(2px)' },
		'40%': { transform: 'scale(0.98) translateX(-2px) translateY(-1px)' },
		'60%': { transform: 'scale(1.05) translateX(4px) translateY(3px)' },
		'80%': { transform: 'scale(0.96) translateX(-3px) translateY(-3px)' },
		'100%': { transform: 'scale(1) translateX(0) translateY(0px)' },
	},
	'drive-active-my-casper': {
		'0%': { transform: 'translateX(0)' },
		'50%': { transform: 'translateX(5px)' },
		'100%': { transform: 'translateX(0)' },
	},
	'drive-rank-1': {
		'0%, 100%': { transform: 'translateY(0) scale(1)' },
		'50%': { transform: 'translateY(-5px) scale(1.05)' },
	},
	'drive-rank-2': {
		'0%, 100%': { transform: 'translateY(0) scale(1)' },
		'50%': { transform: 'translateY(-7px) scale(1.04)' },
	},
	'drive-rank-3': {
		'0%, 100%': { transform: 'translateY(0) scale(1)' },
		'50%': { transform: 'translateY(-3px) scale(1.03)' },
	},
	'drive-rank-4': {
		'0%, 100%': { transform: 'translateY(0) scale(1)' },
		'50%': { transform: 'translateY(-2px) scale(1.02)' },
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
	fold: 'fold 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards',
	unfold: 'unfold 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards',
	'special-my-casper': 'special-my-casper 2s infinite cubic-bezier(0.4, 0.0, 0.2, 1)',
	'drive-active-my-casper': 'drive-active-my-casper 1.5s infinite cubic-bezier(0.4, 0.0, 0.2, 1)',
	'drive-rank-1': 'drive-rank-1 3s infinite cubic-bezier(0.4, 0.0, 0.2, 1)',
	'drive-rank-2': 'drive-rank-2 2.6s infinite cubic-bezier(0.4, 0.0, 0.2, 1)',
	'drive-rank-3': 'drive-rank-3 2.4s infinite cubic-bezier(0.4, 0.0, 0.2, 1)',
	'drive-rank-4': 'drive-rank-4 2s infinite cubic-bezier(0.4, 0.0, 0.2, 1)',
	'engine-start': 'engineStart 3s cubic-bezier(0.3, 1.15, 0.71, 0.09)',
};

export { animation, keyframes };
