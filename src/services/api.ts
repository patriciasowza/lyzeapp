import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  // baseURL: 'http://localhost:10.0.1.1:8081', // celular
});

export default api;
