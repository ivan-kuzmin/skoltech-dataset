import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  flex-grow: 1;
  text-align: center;
  padding: 1rem 0;
  text-decoration: none !important;
  color: black;
  position: relative;
  transition: color 0.2s;
  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: transform 0.2s ease-in-out, background-color 0.2s;
  }
  ::after {
    background: gray;
    opacity: 0.45;
    z-index: -2;
  }
  ::before {
    background: lightgray;
    transform: scaleX(1);
    z-index: -1;
  }
  :hover:not(.active) {
    color: black;
    &::before {
      transform: scaleX(0);
    }
  }
  &.active {
    color: white;
    &::before {
      background: gray;
    }
  }
`;

export default Link;
