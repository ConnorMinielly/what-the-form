import React from 'react';
import wtf_Button from '../components/Button';
import wtf_ShortText from '../components/ShortText';
import wtf_LongText from '../components/LongText';
import wtf_Checkbox from '../components/Checkbox';
import wtf_Dropdown from '../components/Dropdown';
import 'semantic-ui-css/semantic.min.css';

const components = {
  button: wtf_Button,
  short: wtf_ShortText,
  long: wtf_LongText,
  check: wtf_Checkbox,
  drop: wtf_Dropdown,
};

export const wtf = (strings, ...parts) => {
  return ({ className }) => (
    <div className={className}>
      {parts.map(part => {
        return composeComponent(part);
      })}
    </div>
  );
};

const composeComponent = part => {
  const Comp = components[part.type];
  return <Comp {...part} />;
};
