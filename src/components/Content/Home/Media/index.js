import React, { useContext } from 'react';
import { Spinner } from 'reactstrap';
import Grid from './Grid';
import { MediaContext } from '../../../../contexts/MediaContext';
import ErrorButton from '../../ErrorButton';

const Media = () => {
  const { photos, isFetched, error, getPhotosRequest } = useContext(
    MediaContext
  );

  return (
    <>
      <h5>Photos and videos</h5>
      {isFetched ? (
        <Spinner
          type="grow"
          style={{ width: '5rem', height: '5rem' }}
          className="my-5 mx-auto d-block text-center"
        />
      ) : (
        <Grid photos={photos} />
      )}
      {error && <ErrorButton handleClick={getPhotosRequest} />}
    </>
  );
};

export default Media;
