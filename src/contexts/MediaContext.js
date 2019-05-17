import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const MediaContext = createContext();

export const MediaProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [isFetched, setIsFetched] = useState(true);
  const [error /*, setError*/] = useState(null);

  const getPhotosRequest = () => {
    // fetch('https://picsum.photos/v2/list?limit=20')
    //   .then(response => response.json())
    //   .then(data => {
    //     setPhotos(data);
    //     setIsFetched(false);
    //   })
    //   .catch(error => {
    //     setError(error);
    //     setIsFetched(false);
    //   });
    const data = Array(12).fill({
      id: 0,
      url: '',
    });
    setPhotos(data);
    setIsFetched(false);
  };

  useEffect(getPhotosRequest, []);

  return (
    <MediaContext.Provider
      value={{ photos, isFetched, error, getPhotosRequest }}
    >
      {children}
    </MediaContext.Provider>
  );
};

MediaProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
