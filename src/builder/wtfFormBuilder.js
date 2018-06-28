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

function* composeForm(formDef) {
  for (const prop in formDef) {
    yield composeComponent(prop, formDef);
  }
}

const composeComponent = (prop, formDef) => {
  console.log(formDef[prop]);
  const Comp = components[prop];
  if (Comp.name !== 'FormGroup') {
    return (
      <Form.Field>
        <Comp {...formDef[prop]} />
      </Form.Field>
    );
  }
  return <Comp>{formDef[prop].map(p => composeComponent(p))}</Comp>;
};

// eslint-disable-next-line
const wtf = formDef => ({ className }) => {
  // console.log(test);
  // test.splice(1, 0, deepToString(parts[0]));
  // console.log(test);
  // const obj = Function(`"use strict"; return(${strings.join('')})`)();
  console.log(formDef);
  return (
    <Form className={className}>
      {formDef.header && <h1>{formDef.header}</h1>}
      {composeForm(formDef)}
    </Form>
  );
};

export default wtf;
