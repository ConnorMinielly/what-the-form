import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

class wtf_Dropdown extends Component {
  render() {
    console.log(this.props.options);
    return (
      <Dropdown
        placeholder={this.props.placeholder}
        fluid
        selection
        options={this.props.options}
      />
    );
  }
}
export default wtf_Dropdown;
