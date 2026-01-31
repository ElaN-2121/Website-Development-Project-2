import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', 
});

// This attaches token so the backend doesn't give you a 401 error
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;