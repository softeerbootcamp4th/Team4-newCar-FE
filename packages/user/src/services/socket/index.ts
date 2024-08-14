import { SOCKET_BASE_URL } from 'src/constants/environments.ts';
import Socket from 'src/services/socket/socket.ts';

const socketClient = new Socket(SOCKET_BASE_URL);
export default socketClient;
