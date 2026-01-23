import api from '../../services/api';

// Fixed URL: Changed from /admin/menu to /menu
export const fetchMenu = async () => {
  const response = await api.get('/menu'); 
  return response.data;
};

// Fixed: Removed hardcoded headers so Axios handles FormData boundaries automatically
export const addMenuItem = async (itemData) => {
  const response = await api.post('/admin/menu', itemData);
  return response.data;
};

export const updateMenuItem = async (id, itemData) => {
  const response = await api.put(`/admin/menu/${id}`, itemData);
  return response.data;
};

export const deleteMenuItem = async (id) => {
  const response = await api.delete(`/admin/menu/${id}`);
  return response.data;
};