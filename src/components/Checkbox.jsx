import React, { Component } from 'react';
import { Form, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class wtfCheckbox extends Component {
  state = {
    checked: false,
  };

  toggle = (e, { name }) => {
    this.setState({ checked: !this.state.checked }, () =>
      this.onChange(e, { name, value: this.state.checked }));
  };

  render() {
    const { onChange, ...rest } = this.props;
    this.onChange = onChange;
    return (
      <Form.Field
        control={Checkbox}
        value={String(this.state.checked)}
        onChange={this.toggle}
        {...rest}
      />
    );
  }
}

wtfCheckbox.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default wtfCheckbox;
