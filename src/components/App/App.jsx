import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
