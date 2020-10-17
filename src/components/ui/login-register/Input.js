import React from 'react';

export const Input = ({
  text,
  type,
  handleInputChange,
  value,
  name = '',
  i,
}) => {
  return (
    <label className="ui-login__input-item">
      {text}:
      <div>
        <input
          className={value && 'ui-login__isWrited'}
          autoComplete="off"
          type={type}
          name={name || text.toLowerCase()}
          value={value}
          onChange={(e) => handleInputChange(e)}
          required
        />
        {i && <i className={i}></i>}
      </div>
    </label>
  );
};
