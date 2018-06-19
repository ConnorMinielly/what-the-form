import 'semantic-ui-css/semantic.min.css';
import React from 'react';
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

const composeComponent = (part) => {
  const Comp = components[part.type];
  if (Comp.name !== 'FormGroup') {
    return (
      <Form.Field>
        <Comp {...part} />
      </Form.Field>
    );
  }
  return <Comp>{part.children.map(p => composeComponent(p))}</Comp>;
};

const wtf = (strings, ...parts) => ({ className }) => (
  <Form className={className}>
    {strings[0] && <h1>{strings[0]}</h1>}
    {parts.map(part => composeComponent(part))}
  </Form>
);

export default wtf;
