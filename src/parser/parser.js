import React, { Component } from 'react';
import Button from '../components/Button';
import ShortText from '../components/ShortText';
import LongText from '../components/LongText';

const components = {
  button: Button,
  short: ShortText,
  long: LongText,
};

export const wtf = (strings, ...vals) => {
  console.log(strings);
  console.log(vals);
  const Component = components[vals[0][0]];
  return () => <Component />;
};
