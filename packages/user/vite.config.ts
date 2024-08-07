import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, InlineConfig, UserConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

interface VitestConfigExport extends UserConfig {
	test: InlineConfig;
}

export default defineConfig({
	plugins: [react(), svgr(), visualizer()],
	server: { port: 3000 },
	cacheDir: './.yarn/.vite',
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './vitest.setup.ts',
	},
	resolve: {
		alias: {
			src: path.resolve(__dirname, './src'),
		},
	},
	esbuild: {
		sourcemap: false,
		drop: ['console', 'debugger'],
	},
	publicDir: './public',
} as VitestConfigExport);
