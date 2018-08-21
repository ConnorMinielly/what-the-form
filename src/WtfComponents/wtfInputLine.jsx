import React from 'react';

const wtfInputLine = ({ onChange, ...rest }) => {
  return (
    <input
      {...rest}
      onChange={e => onChange(e, { name: rest.name, value: e.target.value })}
    />
  );
};

export default wtfInputLine;
