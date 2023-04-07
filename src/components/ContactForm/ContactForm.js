import React, { useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      name,
      number,
    };

    addContact(contact);

    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css['form-label']}>
        Name
        <input
          className={css['form-input']}
          type="text"
          placeholder="Enter name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>

      <label className={css['form-label']}>
        Number
        <input
          className={css['form-input']}
          type="tel"
          placeholder="Enter phone number"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>

      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};

// -----------------------Class---------------------------------------------
// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };
//   // дестр. можно и так
//   //   handleChange = ({ target: { name, value } }) => {
//   //     this.setState({ [name]: value });
//   //   };

//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     this.props.addContact(this.state);

//     this.reset();
//   };

//   render() {
//     return (
//       <form className={css.form} onSubmit={this.handleSubmit}>
//         <label className={css['form-label']}>
//           Name
//           <input
//             className={css['form-input']}
//             type="text"
//             placeholder="Enter name"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//         </label>

//         <label className={css['form-label']}>
//           Number
//           <input
//             className={css['form-input']}
//             type="tel"
//             placeholder="Enter phone number"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={this.state.number}
//             onChange={this.handleChange}
//           />
//         </label>

//         <button type="submit" className={css.button}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
