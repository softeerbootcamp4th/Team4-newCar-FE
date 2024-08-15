import { ACCESS_TOKEN_KEY } from '@softeer/common/constants';

const STORAGE_KEY_PREFIX = 'hyundai-softeer-team4';

const STORAGE_KEYS = {
	TOKEN: ACCESS_TOKEN_KEY,
	USER: `${STORAGE_KEY_PREFIX}-user`,
	RANK: `${STORAGE_KEY_PREFIX}-rank`,
} as const;

export default STORAGE_KEYS;
