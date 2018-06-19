import React from 'react';
import wtf_Button from '../components/Button';
import wtf_ShortText from '../components/ShortText';
import wtf_LongText from '../components/LongText';
import wtf_Checkbox from '../components/Checkbox';
import wtf_Dropdown from '../components/Dropdown';
import 'semantic-ui-css/semantic.min.css';
import { Form } from 'semantic-ui-react';

const components = {
  button: wtf_Button,
  short: wtf_ShortText,
  long: wtf_LongText,
  check: wtf_Checkbox,
  drop: wtf_Dropdown,
  group: Form.Group,
};

export const wtf = (strings, ...parts) => {
  return ({ className }) => (
    <Form className={className}>
      {parts.map(part => {
        return composeComponent(part);
      })}
    </Form>
  );
};

const composeComponent = part => {
  const Comp = components[part.type];
  if (Comp.name !== 'FormGroup') {
    return (
      <Form.Field>
        <Comp {...part} />
      </Form.Field>
    );
  } else {
    return (
      <Comp>
        {part.children.map(p => {
          return composeComponent(p);
        })}
      </Comp>
    );
  }
};
