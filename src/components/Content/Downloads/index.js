import React, { useContext } from 'react';
import { Container, Spinner } from 'reactstrap';
import { DownloadsContext } from '../../../contexts/DownloadsContext';
import Table from './Table';
import ErrorButton from '../ErrorButton';

const Downloads = () => {
  const { data, isFetched, error, getDataRequest } = useContext(
    DownloadsContext
  );

  return (
    <Container>
      <h5>Downloads</h5>
      <b>The page contains a table with the following columns:</b>
      <ul>
        <li>
          name (cells contain the name of the sequence, which is a link to a
          separate page)
        </li>
        <li>duration (duration of the sequence)</li>
        <li>tags (tags characterizing the properties of the sequence)</li>
      </ul>
      {isFetched ? (
        <Spinner
          type="grow"
          style={{ width: '5rem', height: '5rem' }}
          className="my-5 mx-auto d-block text-center"
        />
      ) : (
        <Table data={data} />
      )}
      {error && <ErrorButton handleClick={getDataRequest} />}
    </Container>
  );
};

export default Downloads;
