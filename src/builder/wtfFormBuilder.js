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
  inputLine: wtfShortText,
  inputArea: wtfLongText,
  checkbox: wtfCheckbox,
  select: wtfDropdown,
  group: Form.Group,
};

const composeComponent = (componentData, handleChange) => {
  const NewComponent = components[componentData[0].replace(/[0-9]/g, '')];
  if (NewComponent.name !== 'FormGroup') {
    return <NewComponent onChange={handleChange} {...componentData[1]} />;
  }
  return (
    <NewComponent>
      {Object.entries(componentData[1]).map(subComponent => composeComponent(subComponent))}
    </NewComponent>
  );
};

const wtf = (formDef, onSubmit) =>
  class wtfForm extends Component {
    state = {};

    handleChange = (event, { name, value }) => {
      if (name !== undefined) {
        this.setState({ [name]: value });
      }
    };

    render(className) {
      return (
        <Form className={className} onSubmit={() => onSubmit(this.state)}>
          {Object.entries(formDef).map(entry =>
              (entry[0] !== 'header' ? (
                composeComponent(entry, this.handleChange)
              ) : (
                <h1>{formDef.header}</h1>
              )))}
        </Form>
      );
    }
  };

export default wtf;
