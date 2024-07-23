module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb',
		'airbnb/hooks',
		'airbnb-typescript',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	overrides: [
		{
			env: { node: true },
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: { sourceType: 'script' },
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'react'],
	rules: {
		'object-curly-newline': 'off',
		'import/extensions': 'off',
		'react/react-in-jsx-scope': 'off',
		'arrow-parens': ['error', 'as-needed'],
		'no-confusing-arrow': ['error', { allowParens: true, onlyOneSimpleParam: true }],
		'implicit-arrow-linebreak': 'off',
		'function-paren-newline': 'off',
		'consistent-return': 'off',
		'no-use-before-define': [
			'error',
			{
				functions: false,
				classes: true,
				variables: true,
				allowNamedExports: false,
			},
		],
		'import/no-extraneous-dependencies': 'off',
		'no-restricted-imports': [
			'error',
			{
				patterns: ['.*'],
			},
		],
		'react/jsx-props-no-spreading': 'off',
		indent: ['error', 'tab'],
		'react/jsx-indent': 'off',
		'react/jsx-indent-props': 'off',
		'@typescript-eslint/indent': ['error', 'tab'],
		'no-tabs': 'off',
	},
};
