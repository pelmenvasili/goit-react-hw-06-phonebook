import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li key={id} className={css.contact}>
      <span className={css.contactName}>{name}:</span> {number}
      <button onClick={() => onDeleteContact(id)} className={css.deleteButton}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
