import React from 'react';
import { Row } from 'reactstrap';
import Link from './Link';

const items = [
  {
    id: 0,
    title: 'Home',
    route: '/',
    exact: true,
  },
  {
    id: 1,
    title: 'Format',
    route: '/format',
    exact: true,
  },
  {
    id: 2,
    title: 'Downloads',
    route: '/downloads',
    exact: false,
  },
];

const Navbar = () => (
  <nav className="w-100 container-fluid shadow font-weight-bold">
    <Row>
      {items.map(item => (
        <Link
          key={item.id}
          exact={item.exact}
          to={item.route}
          className="col-xs-12 col-lg-4"
        >
          {item.title}
        </Link>
      ))}
    </Row>
  </nav>
);

export default Navbar;
