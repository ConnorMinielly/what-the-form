import React, { Component } from 'react';
import { Checkbox } from 'semantic-ui-react';

// eslint-disable-next-line
class wtfCheckbox extends Component {
  render() {
    return <Checkbox label={this.props.label} />;
  }
}
export default wtfCheckbox;
