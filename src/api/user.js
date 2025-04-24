import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_MS_USERS_API,
});

export const createUser = async (data) => {
  const response = await api.post('/users', data);
  return response.data;
};

export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const getUser = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const updateUser = async (id, data) => {
  const response = await api.put(`/users/${id}`, data);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};


