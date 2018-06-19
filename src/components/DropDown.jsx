import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

// eslint-disable-next-line
class wtfDropdown extends Component {
  render() {
    return (
      <Dropdown placeholder={this.props.placeholder} fluid selection options={this.props.options} />
    );
  }
}
export default wtfDropdown;
