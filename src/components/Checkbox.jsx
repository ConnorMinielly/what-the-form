import React, { Component } from 'react';
import { Checkbox } from 'semantic-ui-react';

class wtfCheckbox extends Component {
  render() {
    return <Checkbox label={this.props.label} />;
  }
}
export default wtfCheckbox;
