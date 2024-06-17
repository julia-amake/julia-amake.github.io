import axios from 'axios';
import { API_URL } from 'src/shared/consts/api';
import { LOCAL_STORAGE_TOKEN_KEY } from 'src/shared/consts/localStorage';

const getAuthorizationToken = () => `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) || ''}`;

export const $api = axios.create({
  baseURL: API_URL,
  headers: {
    authorization: getAuthorizationToken(),
  },
});
