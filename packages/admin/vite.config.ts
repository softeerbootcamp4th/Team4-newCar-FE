import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	cacheDir: './.yarn/.vite',
	resolve: {
		alias: {
			src: path.resolve(__dirname, './src'),
		},
	},
});
