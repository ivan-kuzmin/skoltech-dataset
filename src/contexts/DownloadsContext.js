import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const DownloadsContext = createContext();

export const DownloadsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetched, setIsFetched] = useState(true);
  const [error /*, setError*/] = useState(null);

  const getDataRequest = () => {
    let i = 0;
    const data = Array(...Array(20)).map(el => ({
      id: i++,
      name: `${document.location.origin}${
        document.location.pathname
      }#/downloads/${i}`,
      duration: `${i * 10} s`,
      tags: 'hello, world',
    }));
    setData(data);
    setIsFetched(false);
  };

  useEffect(getDataRequest, []);

  return (
    <DownloadsContext.Provider
      value={{ data, isFetched, error, getDataRequest }}
    >
      {children}
    </DownloadsContext.Provider>
  );
};

DownloadsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
