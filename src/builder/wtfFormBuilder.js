import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import wtfButton from '../components/Button';
import wtfShortText from '../components/ShortText';
import wtfLongText from '../components/LongText';
import wtfCheckbox from '../components/Checkbox';
import wtfDropdown from '../components/Dropdown';

const components = {
  button: wtfButton,
  short: wtfShortText,
  long: wtfLongText,
  check: wtfCheckbox,
  drop: wtfDropdown,
  group: Form.Group,
};

const composeComponent = (componentData, handleChange) => {
  const Comp = components[componentData[0].replace(/[0-9]/g, '')];
  if (Comp.name !== 'FormGroup') {
    return <Comp onChange={handleChange} {...componentData[1]} />;
  }
  return <Comp>{Object.entries(componentData[1]).map(p => composeComponent(p))}</Comp>;
};

const wtf = formDef =>
  class wtfForm extends Component {
    state = {};

    handleChange = (e, { name, value }) => {
      if (name !== undefined) {
        this.setState({ [name]: value });
      }
    };

    render(className) {
      return (
        <Form className={className} onSubmit={() => formDef.onSubmit(this.state)}>
          {Object.entries(formDef).map(entry =>
              (entry[0] !== 'header' ? (
                entry[0] !== 'onSubmit' && composeComponent(entry, this.handleChange)
              ) : (
                <h1>{formDef.header}</h1>
              )))}
        </Form>
      );
    }
  };

export default wtf;
