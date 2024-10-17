import { io } from 'socket.io-client';

const socket = io('/', {  // vite.config.js의 프록시 설정으로 인해 상대 경로 사용 가능
  withCredentials: true,
});

export default socket;
