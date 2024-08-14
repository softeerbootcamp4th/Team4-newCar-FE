import { Socket } from '@softeer/common/utils';
import { SOCKET_BASE_URL } from 'src/constants/environments.ts';

const socketClient = new Socket(SOCKET_BASE_URL);
export default socketClient;
