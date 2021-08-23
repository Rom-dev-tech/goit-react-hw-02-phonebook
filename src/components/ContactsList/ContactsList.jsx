import React from 'react';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>
          {name}: {number}
        </p>
      </li>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ContactsList;
