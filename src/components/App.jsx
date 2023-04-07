import React, { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import css from './Container/Container.module.css';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  const isFirstRender = useRef(true);

  useEffect(() => {
    // Для пропуска рендера на стадии монтрования(первого рендера)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    if (contacts.find(cont => cont.name === contact.name)) {
      return alert(`${contact.name} is already in contacts.`);
    }

    contact['id'] = nanoid();

    setContacts(() => [...contacts, contact]);
  };

  const deleteContact = contactId => {
    setContacts(() => contacts.filter(contact => contact.id !== contactId));
  };

  const updateFilter = date => {
    setFilter(date);
  };

  const filterByName = () => {
    const arr = contacts.filter(el =>
      el.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
    return arr;
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>

      <Filter state={filter} updateFilter={updateFilter} />

      {filter === '' ? (
        <ContactList contacts={contacts} deleteContact={deleteContact} />
      ) : (
        <ContactList contacts={filterByName()} deleteContact={deleteContact} />
      )}
    </div>
  );
};

// ------------------------Class---------------------------------------------

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     // console.dir(contacts);
//     const parsedContacts = JSON.parse(contacts);
//     // console.dir(parsedContacts);
//     // Если localStorage не пустой, тогда записываем State
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       // console.log('изменился State');
//       // Записываем localStorage, если были изменения State
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = contact => {
//         // console.log(this.state.contacts);
//         // console.log(contact);
//     if (this.state.contacts.find(cont => cont.name === contact.name)) {
//       return alert(`${contact.name} is already in contacts.`);
//     }

//     contact['id'] = nanoid();

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, contact],
//     }));
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   updateFilter = date => {
//     this.setState({ filter: date });
//   };

//   filterByName = () => {
//     const { contacts, filter } = this.state;
//     const arr = contacts.filter(el =>
//       el.name.toLowerCase().includes(filter.trim().toLowerCase())
//     );
//     return arr;
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     return (
//       <div className={css.container}>
//         <h1>Phonebook</h1>
//         <ContactForm addContact={this.addContact} />

//         <h2>Contacts</h2>

//         <Filter state={filter} updateFilter={this.updateFilter} />

//         {this.state.filter === '' ? (
//           <ContactList contacts={contacts} deleteContact={this.deleteContact} />
//         ) : (
//           <ContactList
//             contacts={this.filterByName()}
//             deleteContact={this.deleteContact}
//           />
//         )}
//       </div>
//     );
//   }
// }
