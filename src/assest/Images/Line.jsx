import React from 'react';
import PropTypes from 'prop-types';

const HorizontalLine = ({ color, shadow }) => {
  const lineStyle = {
    backgroundColor: color || '#D9D9D9',
    boxShadow: shadow || '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    height: '7px',
    width: '100%',
  };

  return <div style={lineStyle}></div>;
};

HorizontalLine.propTypes = {
  color: PropTypes.string,
  shadow: PropTypes.string,
};

export default HorizontalLine;
