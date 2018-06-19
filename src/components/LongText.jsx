import React, { Component } from 'react';
import { TextArea } from 'semantic-ui-react';

// eslint-disable-next-line
class wtfLongText extends Component {
  render() {
    return <TextArea placeholder={this.props.placeholder} />;
  }
}
export default wtfLongText;
