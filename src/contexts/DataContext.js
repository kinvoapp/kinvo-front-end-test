import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState({ success: false, data: {} });

  useEffect(() => {
    const api =
      'https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData';
    fetch(api)
      .then((response) => response.json())
      .then((apiData) => setData(apiData));
  }, []);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};

DataContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
