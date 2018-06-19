import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

// TODO: Replace Componentent types with s-ui form subtypes

// eslint-disable-next-line
class wtfButton extends Component {
  render() {
    // eslint-disable-next-line
    return <Button>{this.props.text}</Button>;
  }
}
export default wtfButton;
