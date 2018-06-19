import React, { Component } from 'react';
import { Form, TextArea } from 'semantic-ui-react';

class wtf_LongText extends Component {
  render() {
    return (
      <Form>
        <TextArea placeholder={this.props.placeholder} />
      </Form>
    );
  }
}
export default wtf_LongText;
