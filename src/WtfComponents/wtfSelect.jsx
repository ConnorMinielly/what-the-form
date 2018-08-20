import React from 'react';

const wtfSelect = ({ onChange, ...props }) => {
  const { options, ...rest } = props;
  return (
    <select
      {...rest}
      onChange={e => onChange(e, { name: rest.name, value: e.target.value })}
    >
      {options.map(opt => (
        <option key={opt.key} value={opt.value}>
          {opt.text}
        </option>
      ))}
    </select>
  );
};

export default wtfSelect;
