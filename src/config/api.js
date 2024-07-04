
import axios from 'axios';
const DEPLOYED='https://ecommerce-backend-gd5eij951-ankits-projects-27b7cb4f.vercel.app'
const LOCALHOST='https://ecommerce-backend-gd5eij951-ankits-projects-27b7cb4f.vercel.app'

export const API_BASE_URL = LOCALHOST;

const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
