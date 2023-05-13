import css from '../ContactForm/ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter, getFilter} from '../../redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = event => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        className={css.input}
      />
    </label>
  );
};

export default Filter;
