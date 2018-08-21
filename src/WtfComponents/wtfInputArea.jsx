import React from 'react';

const wtfInputArea = ({ onChange, ...rest }) => {
  return (
    <textarea
      {...rest}
      onChange={e => onChange(e, { name: rest.name, value: e.target.value })}
    />
  );
};

export default wtfInputArea;
