import { Config } from 'tailwindcss';

declare const tailwindConfig: Omit<Config, 'content'>;

export { tailwindConfig as default };
