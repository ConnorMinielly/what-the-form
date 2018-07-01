import React, { Component } from 'react';
import { Form, Checkbox } from 'semantic-ui-react';

// eslint-disable-next-line
class wtfCheckbox extends Component {
  state = {
    checked: false,
  };

  toggle = (e, { name, value }) => {
    this.setState({ checked: !this.state.checked }, () => this.onChange(e, { name, value }));
  };

  render() {
    console.log(this.state.checked);
    const { onChange, ...rest } = this.props;
    this.onChange = onChange;
    return (
      <Form.Field control={Checkbox} value={this.state.checked} onChange={this.toggle} {...rest} />
    );
  }
}
export default wtfCheckbox;
