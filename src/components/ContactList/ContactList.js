import PropTypes from 'prop-types';
import { VscCircleSmallFilled } from 'react-icons/vsc';
import css from './ContactList.module.css';

export function ContactList({ contacts, deleteContact }) {
  // console.log(contacts);
  return (
    <ul className={css['list-wraper']}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css['list-item']}>
            <VscCircleSmallFilled />
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              className={css['list-button']}
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
