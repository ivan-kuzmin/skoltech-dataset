import styled from 'styled-components';
import { Col } from 'reactstrap';

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

export default Photo;
