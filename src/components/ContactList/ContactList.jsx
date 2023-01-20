import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul className={css.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.item}>
        <p className={css.contact}>
          {name}: {number}
        </p>
        <button
          type="button"
          onClick={() => onDelete(id)}
          className={css.button}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
export default ContactList;
