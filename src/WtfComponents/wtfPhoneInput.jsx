import React from 'react';

class wtfInputPhone extends React.Component {
  state = {
    error: false,
    current: '',
    attempt: '',
    validation: this.props.validation,
  };

  handleValidation = () => {
    let { validation } = this.state;
    if (new RegExp(validation).test(this.state.current)) {
    }
  };

  checkInput = (e, { name }) => {
    console.log(e.target);
    this.setState({ current: e.target.value }, e =>
      this.onChange(e, { name, value: this.state.current }),
    );
  };

  render() {
    const { onChange, ...rest } = this.props;
    this.onChange = onChange;
    return (
      <input
        type="tel"
        value={this.state.current}
        onChange={this.checkInput}
        {...rest}
      />
    );
  }
}
// const wtfInputPhone = props => <Form.Input control={Input} {...props} />;

export default wtfInputPhone;
