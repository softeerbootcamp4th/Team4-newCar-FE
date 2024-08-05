import { FetchWrapper } from '@softeer/common';
import { BASE_URL } from 'src/vite-env';

const http = new FetchWrapper(BASE_URL);

export default http;
