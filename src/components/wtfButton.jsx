import React from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const wtfButton = (props) => {
  const { text, ...rest } = props;
  return <Form.Button {...rest}>{text}</Form.Button>;
};

wtfButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default wtfButton;
