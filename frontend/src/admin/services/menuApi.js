import api from '../../services/api';

export const fetchMenu = async () => {
  const response = await api.get('/admin/menu');
  return response.data;
};

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