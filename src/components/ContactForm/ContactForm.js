import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from '../../redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleFormSubmit = event => {
    const form = event.target.elements;
    event.preventDefault();
    const name = form.name.value;
    const number = form.number.value;

    const nameExists = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (nameExists) {
      alert(`${name} is already in contacts!`);
      event.target.reset();
      return;
    }
    dispatch(addContact({ name, number }));
    event.target.reset();
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={css.addContactBtn}>
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
