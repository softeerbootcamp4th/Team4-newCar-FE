const STORAGE_KEY_PREFIX = 'hyundai-softeer-team4';

const STORAGE_KEYS = {
	USER: `${STORAGE_KEY_PREFIX}-user`,
	TOKEN: `${STORAGE_KEY_PREFIX}-token`,
	RANK: `${STORAGE_KEY_PREFIX}-rank`,
} as const;

export default STORAGE_KEYS;
