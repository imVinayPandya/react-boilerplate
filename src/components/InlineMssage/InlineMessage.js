import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'react-bootstrap';

const InlineMessage = ({ message }) => (
  <span style={{ color: '#f95a5c' }}>
    {message}
  </span >
);

InlineMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export default InlineMessage;