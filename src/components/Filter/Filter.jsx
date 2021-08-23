import React from 'react';
import '../ContactsEditor/ContactsEditor.scss';

const Filter = ({ value, onChange }) => (
  <label className="form__label">
    <span className="form__name">Find contacts by name</span>
    <input
      className="form__input"
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
