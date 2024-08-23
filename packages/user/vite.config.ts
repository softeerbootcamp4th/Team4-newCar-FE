import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';
import svgr from 'vite-plugin-svgr';

import { dependencies } from './package.json';

const reactDeps = Object.keys(dependencies).filter(
	(key) => key === 'react' || key.startsWith('react-'),
);

const manualChunks = {
	vendor: reactDeps,
	...Object.keys(dependencies).reduce((chunks, name) => {
		if (!reactDeps.includes(name) && name !== '@softeer/common') {
			// eslint-disable-next-line no-param-reassign
			chunks[name] = [name];
		}
		return chunks;
	}, {}),
};

export default defineConfig({
	plugins: [
		react(),
		svgr(),
		visualizer(),
		compression({
			algorithm: 'brotliCompress',
			ext: '.br',
		}),
		viteImagemin({
			gifsicle: {
				optimizationLevel: 7,
				interlaced: false,
			},
			optipng: {
				optimizationLevel: 7,
			},
			mozjpeg: {
				quality: 80,
			},
			pngquant: {
				quality: [0.8, 0.9],
				speed: 4,
			},
			svgo: {
				plugins: [
					{
						name: 'removeViewBox',
						active: false,
					},
					{
						name: 'removeEmptyAttrs',
						active: false,
					},
				],
			},
		}),
	],
	// server: { port: 3000 },
	cacheDir: './.yarn/.vite',
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
	define: {
		global: 'window', // web socket
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks,
			},
		},
	},
});
