import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

// eslint-disable-next-line
class wtfButton extends Component {
  render() {
    return <Button>{this.props.text}</Button>;
  }
}
export default wtfButton;
