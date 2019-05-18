import React from 'react';
import PropTypes from 'prop-types';
import { Table as TableUI } from 'reactstrap';

const Table = ({ data }) => (
  <TableUI responsive striped className="border mt-3 small">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Duration</th>
        <th>Tags</th>
      </tr>
    </thead>
    <tbody>
      {data.map(el => (
        <tr key={el.id}>
          <th scope="row">{el.id + 1}</th>
          <td>
            <a href={el.name}>{el.name}</a>
          </td>
          <td>{el.duration}</td>
          <td>{el.tags}</td>
        </tr>
      ))}
    </tbody>
  </TableUI>
);

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Table;
