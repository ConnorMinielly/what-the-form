import React from 'react';
import Button from '../components/Button';
import ShortText from '../components/ShortText';
import LongText from '../components/LongText';

const components = {
  button: Button,
  short: ShortText,
  long: LongText,
};

export const wtf = (strings, ...parts) => {
  return () => (
    <div>
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
