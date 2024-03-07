import { useState } from 'react';
import { getJSONToLocalStorage, setJSONToLocalStorage } from '@utils';

const useLocalStorage = (key, defaultValue) => {
  const [data, setData] = useState(() =>
    getJSONToLocalStorage(key, defaultValue)
  );

  const setJSONToLocalStorageHook = (newData) => {
    setData(newData);
    setJSONToLocalStorage(key, newData);
  };

  return [data, setJSONToLocalStorageHook];
};

export default useLocalStorage;
