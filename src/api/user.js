import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_MS_USERS_API,
});

export const getUsers = async () => {
  const response = await api.get('/users');
  console.log(response.data)
  return response.data;
};
