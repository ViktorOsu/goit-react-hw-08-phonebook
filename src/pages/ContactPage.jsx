import React, { useEffect } from 'react';
import { Form } from '../components/Form/Form';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import {
  PhoneBook,
  ContactsTitle,
  ContactsWper,
} from '../components/App.styled';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contactsOperations';
import { selectContacts, selectFilter } from '../redux/selectors';
import { selectIsAuth } from '../redux/auth/authSelector';

export const ContactPage = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  // const isUserExist = useSelector((state) => state.auth.localId);

  useEffect(() => {
    //   !isAuth && isUserExist && dispatch(getContact());
    // }, [dispatch, isAuth, isUserExist]);

    if (isAuth) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isAuth]);

  const checkDuplicate = data =>
    contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <PhoneBook>
      <Form checkDuplicate={checkDuplicate} />
      <ContactsWper>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        {contacts && <ContactList contacts={filteredContacts()} />}
      </ContactsWper>
    </PhoneBook>
  );
};
