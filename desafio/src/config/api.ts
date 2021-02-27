interface ApiConfig {
  baseURL: string;
}

export const apiConfig: ApiConfig = {
  baseURL:
    process.env.REACT_APP_API_URL ||
    'https://1762dd35-8f53-49fd-8b8e-c8134a283cb4.mock.pstmn.io/'
};
