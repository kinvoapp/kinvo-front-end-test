import axios from 'axios';

interface ApiProps {
  fullResponse?: boolean;
}

const api = (props?: ApiProps): any => {
  const apiCall = axios.create({
    baseURL: process.env.API,
  });

  return apiCall;
};

export { default as to } from '@utils/awaitTo';

export default api;
