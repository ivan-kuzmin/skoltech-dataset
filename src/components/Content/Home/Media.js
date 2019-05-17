import React, { useContext } from 'react';
import { Spinner, Container, Row, Col, Button } from 'reactstrap';
import styled from 'styled-components';
import { MediaContext } from '../../../contexts/MediaContext';
import templateImage from '../../../images/template-image.svg';

const Photo = styled(Col)`
  padding: 0;
  border: solid 5px #f8f9fa;
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;
  cursor: pointer;
  img:not(.template) {
    min-width: 100%;
    min-height: 100%;
  }
  img.template {
    max-width: 30%;
    max-height: auto;
  }
`;

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
        <Container>
          <Row style={{ margin: '0 -20px' }}>
            {photos.map(photo => (
              <Photo xs={12} sm={6} md={4} lg={3} key={photo.id}>
                {photo.url ? (
                  <img className="" src={photo.url} alt={`img-${photo.id}`} />
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
      )}
      {error && (
        <div className="py-4 text-center">
          <h5 className="small">An error occurred</h5>
          <Button outline size="sm" onClick={getPhotosRequest}>
            Try again
          </Button>
        </div>
      )}
    </>
  );
};

export default Media;
