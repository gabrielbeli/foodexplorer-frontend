import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://foodexplorer-backend-1a9g.onrender.com',
  //baseURL: 'http://localhost:3000',
});