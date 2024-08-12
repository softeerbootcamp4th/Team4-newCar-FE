//* *********************************** */
//* * Environment Variables             */
//* *********************************** */

import { Category } from '@softeer/common/types';

export const { VITE_BASE_URL: API_BASE_URL, VITE_SOCKET_BASE_URL: SOCKET_BASE_URL } = import.meta
	.env;

	export const DOMAIN: Record<Category | 'default', string> = {
		default: 'https://www.batro.org',
		leisure: 'https://leisure.batro.org',
		pet: 'https://pet.batro.org',
		travel: 'https://travel.batro.org',
		place: 'https://space.batro.org',
	};
