import React, { Component } from 'react';

class LongText extends Component {
  render() {
    return <input type="text" placeholder={this.props.text} />;
  }
}
export default LongText;
