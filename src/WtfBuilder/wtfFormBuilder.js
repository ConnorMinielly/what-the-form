import React, { Component } from 'react';
import wtfButton from '../WtfComponents/wtfButton';
import wtfInputLine from '../WtfComponents/wtfInputLine';
import wtfInputArea from '../WtfComponents/wtfInputArea';
import wtfCheckbox from '../WtfComponents/wtfCheckbox';
import wtfSelect from '../WtfComponents/wtfSelect';
import wtfInputPhone from '../WtfComponents/wtfPhoneInput';
import wtfGroup from '../WtfComponents/wtfGroup';

const components = {
  button: wtfButton,
  textLine: wtfInputLine,
  textArea: wtfInputArea,
  checkbox: wtfCheckbox,
  select: wtfSelect,
  group: wtfGroup,
  phone: wtfInputPhone,
};

const composeComponent = (componentData, handleChange) => {
  const NewComponent = components[componentData[1].type];
  if (NewComponent.name !== 'wtfGroup') {
    const { type, ...rest } = componentData[1];
    return (
      <NewComponent onChange={handleChange} name={componentData[0]} {...rest} />
    );
  }
  return (
    <NewComponent {...componentData[1].props}>
      {Object.entries(componentData[1].children).map(subComponent =>
        composeComponent(subComponent, handleChange),
      )}
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
        <form
          className={className}
          onSubmit={e => onSubmit && onSubmit(e, this.state)}
        >
          {Object.entries(formDef).map(
            entry =>
              entry[0] !== 'header' ? (
                composeComponent(entry, this.handleChange)
              ) : (
                <h1>{formDef.header}</h1>
              ),
          )}
        </form>
      );
    }
  };

export default wtf;
