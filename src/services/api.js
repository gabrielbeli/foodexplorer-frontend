import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://foodexplorer-backend-275e.onrender.com',
});