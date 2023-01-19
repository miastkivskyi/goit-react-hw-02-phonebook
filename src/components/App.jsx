import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

class App extends React.Component {
  state = {
    contacts: [],
    filter: ' ',
  };
  loginInputId = nanoid();

  addContact = ({ name, id, number }) => {
    const newContact = { name, id, number };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
