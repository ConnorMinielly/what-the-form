import React, { Component } from 'react';
import { TextArea } from 'semantic-ui-react';

class wtf_LongText extends Component {
  render() {
    return <TextArea placeholder={this.props.placeholder} />;
  }
}
export default wtf_LongText;
