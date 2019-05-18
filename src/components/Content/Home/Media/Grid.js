import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'reactstrap';
import templateImage from '../../../../images/template-image.svg';
import Photo from './Photo';

const Grid = ({ photos }) => (
  <Container>
    <Row style={{ margin: '0 -20px' }}>
      {photos.map((photo, i) => (
        <Photo xs={12} sm={6} md={4} lg={3} key={photo.id}>
          {photo.url ? (
            <img className="" src={photo.url} alt={`img-${photo}`} />
          ) : (
            <img
              className="template"
              src={templateImage}
              alt={`img-${photo.id}`}
            />
          )}
        </Photo>
      ))}
    </Row>
  </Container>
);

Grid.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Grid;
