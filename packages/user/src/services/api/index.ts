import { FetchWrapper } from '@softeer/common/utils';
import { API_BASE_URL } from 'src/constants/environments.ts';

const http = new FetchWrapper(API_BASE_URL);

export default http;
