import React from 'react';

class wtfInputPhone extends React.Component {
  state = {
    error: false,
    current: '',
    validation: this.props.validation,
  };

  checkInput = event => {
    const { value } = event.target;
    const { validation } = this.state;
    if (validation.test(value)) {
      this.setState({ current: value }, () =>
        this.onChange(event, {
          name: this.props.name,
          value: this.state.current,
        }),
      );
    } else {
    }
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
