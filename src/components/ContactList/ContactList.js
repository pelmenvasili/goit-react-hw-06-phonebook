import ContactListItem from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts, getFilter } from '../../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteClick = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={handleDeleteClick}
        />
      ))}
    </ul>
  );
};

export default ContactList;
