import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const ErrorButton = ({ handleClick }) => (
  <div className="py-4 text-center">
    <h5 className="small">An error occurred</h5>
    <Button outline size="sm" onClick={handleClick}>
      Try again
    </Button>
  </div>
);

ErrorButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ErrorButton;
