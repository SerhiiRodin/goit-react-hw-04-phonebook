import PropTypes from 'prop-types';
import css from './Filter.module.css';

export function Filter({ filter, updateFilter }) {
  return (
    <label className={css['form-label']}>
      Find contacts by name
      <input
        className={css['form-input']}
        type="text"
        name="name"
        value={filter}
        onChange={e => {
          updateFilter(e.currentTarget.value.trim());
        }}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  updateFilter: PropTypes.func.isRequired,
};
