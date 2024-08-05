import { defineConfig } from 'tsup';

export default defineConfig({
	dts: true,
	splitting: false,
	sourcemap: true,
	clean: true,
	treeshake: true,
	minify: true,
	entry: {
		index: 'src/index.ts',
		components: 'src/components/index.ts',
		theme: 'src/styles/theme/index.ts',
		tailwindConfig: 'tailwind.config.ts',
	},
	format: ['cjs', 'esm'],
	outDir: 'dist',
});
