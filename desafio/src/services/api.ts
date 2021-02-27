import axios from 'axios';

import { apiConfig } from '../config';

export const api = axios.create({
  baseURL: apiConfig.baseURL
});
