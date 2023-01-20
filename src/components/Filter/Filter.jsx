import React from 'react';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <label htmlFor="findInputId" className={css.container}>
        Find contacts by name
        <input
          type="text"
          value={value}
          name="filter"
          onChange={onChange}
          id="findInputId"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          className={css.inputFind}
        ></input>
      </label>
    </>
  );
};

export default Filter;
