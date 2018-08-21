import React from 'react';
import PropTypes from 'prop-types';

const wtfButton = (props) => {
  const { text, ...rest } = props;
  return <button {...rest}>{text}</button>;
};

wtfButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default wtfButton;
