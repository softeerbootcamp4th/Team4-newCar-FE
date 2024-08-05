import { FetchWrapper } from '@softeer/common/utils';
import { BASE_URL } from 'src/vite-env.ts';

const http = new FetchWrapper(BASE_URL);

export default http;
