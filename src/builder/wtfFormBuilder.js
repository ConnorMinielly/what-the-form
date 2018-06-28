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

const composeComponent = (prop) => {
  const Comp = components[prop[0].replace(/[0-9]/g, '')];
  if (Comp.name !== 'FormGroup') {
    return (
      <Form.Field>
        <Comp {...prop[1]} />
      </Form.Field>
    );
  }
  return <Comp>{Object.entries(prop[1]).map(p => composeComponent(p))}</Comp>;
};

// eslint-disable-next-line
const wtf = formDef => ({ className }) => {
  return (
    <Form className={className}>
      {formDef.header && <h1>{formDef.header}</h1>}
      {Object.entries(formDef).map(ent => composeComponent(ent))}
    </Form>
  );
};

export default wtf;
