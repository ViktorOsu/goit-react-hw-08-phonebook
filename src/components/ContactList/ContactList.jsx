import { ContactItem } from './ContactItem';
import PropTypes from 'prop-types';
import { ContactsList } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ContactsList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
