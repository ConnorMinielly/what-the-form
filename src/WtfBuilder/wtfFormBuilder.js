import React, { Component } from 'react';
import styled from 'styled-components';
import wtfButton from '../WtfComponents/wtfButton';
import wtfInputLine from '../WtfComponents/wtfInputLine';
import wtfInputArea from '../WtfComponents/wtfInputArea';
import wtfCheckbox from '../WtfComponents/wtfCheckbox';
import wtfSelect from '../WtfComponents/wtfSelect';
import wtfInputPhone from '../WtfComponents/wtfPhoneInput';
import wtfGroup from '../WtfComponents/wtfGroup';
import wtfForm from '../WtfComponents/wtfForm';

export const components = {
  button: wtfButton,
  textLine: wtfInputLine,
  textArea: wtfInputArea,
  checkbox: wtfCheckbox,
  select: wtfSelect,
  group: wtfGroup,
  phone: wtfInputPhone,
  form: wtfForm,
};

const composeComponent = (componentData, handleChange, index) => {
  const NewComponent = components[componentData[1].type];
  if (NewComponent.name !== 'wtfGroup') {
    const { type, ...rest } = componentData[1];
    return (
      <NewComponent
        key={index}
        onChange={handleChange}
        name={componentData[0]}
        {...rest}
      />
    );
  }
  return (
    <NewComponent key={index} {...componentData[1].props}>
      {Object.entries(componentData[1].children).map((subComponent, index) =>
        composeComponent(subComponent, handleChange, index),
      )}
    </NewComponent>
  );
};

const wtf = (formDef, onSubmit) =>
  class Wtf extends Component {
    state = {};

    handleChange = (event, { name, value }) => {
      if (name !== undefined) {
        this.setState({ [name]: value });
      }
    };

    render(className) {
      const Form = components.form;
      return (
        <Form
          className={className}
          onSubmit={e => onSubmit && onSubmit(e, this.state)}
        >
          {Object.entries(formDef).map(
            (entry, index) =>
              entry[0] !== 'header' ? (
                composeComponent(entry, this.handleChange, index)
              ) : (
                <h1 key={0}>{formDef.header}</h1>
              ),
          )}
        </Form>
      );
    }
  };

export default wtf;
