import React, { Component } from 'react';
import PropTypes from 'prop-types';

class wtfCheckbox extends Component {
  state = {
    checked: false,
  };

  toggle = (event, { name }) => {
    this.setState({ checked: !this.state.checked }, () =>
      this.onChange(event, { name, value: this.state.checked }),
    );
  };

  render() {
    const { onChange, ...rest } = this.props;
    this.onChange = onChange;
    return (
      <input
        type="checkbox"
        value={String(this.state.checked)}
        checked={this.state.checked}
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
