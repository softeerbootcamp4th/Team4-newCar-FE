module.exports = {
  tabWidth: 2,
  useTabs: true,
  singleQuote: true,
  semi: true,
  printWidth: 120,
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.cjs',
  tailwindAttributes: ['className'],
};
