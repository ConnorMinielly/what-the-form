import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class wtfShortText extends Component {
  render() {
    return <Input placeholder={this.props.placeholder} />;
  }
}
export default wtfShortText;
