import { useState } from 'react';
import api, { to } from '../api';
import useIsMounted from '../../src/utils/hooks/useIsMounted';

interface Config<FetchData> {
  defaultValue?: any;
  onSuccess?: (response: FetchData) => void;
  onError?: (error: Error | null) => void;
  fetchConfig?: any;
}

type Method = 'get' | 'post' | 'put' | 'delete' | 'patch';

export const useFetch = <FetchData = any>(path: string, method: Method = 'get', config: Config<FetchData> = {}) => {
  const { defaultValue, onSuccess, onError, fetchConfig } = config;
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState<FetchData>(defaultValue);
  const isMounted = useIsMounted();

  const handleSuccess = response => {
    if (onSuccess) {
      onSuccess(response);
    }

    setData(response);
    return response;
  };

  const doFetch = async (params: any = undefined, newPath = path, toThrow?: boolean): Promise<FetchData | boolean> => {
    setIsFetching(true);

    const currentApi = api;
    const [error, response] = await to<{ data: FetchData }>(currentApi()[method](newPath, params, fetchConfig || {}));
    if (!isMounted.current) {
      return false;
    }

    setIsFetching(false);
    if (response) {
      return handleSuccess(response.data);
    }

    if (error) {
      if (onError) {
        onError(error || null);
      }
      return false;
    }

    return true;
  };

  const updateData = (modifiedData: FetchData) => setData(modifiedData);

  return { isFetching, doFetch, data, updateData };
};
