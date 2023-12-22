import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:5000',
  baseURL: 'https://task-management-server-sooty-pi.vercel.app',
});

const useAxios = () => {
  return instance;
};

export default useAxios;
