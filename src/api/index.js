import axios from 'axios';

const API = axios.create({
  baseURL: '/api',  // vite.config.js의 프록시 설정으로 인해 상대 경로 사용 가능
  withCredentials: true,
});

export const getTestData = () => API.get('/test');
// 다른 API 호출 함수들...
