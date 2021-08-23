import React, { Component } from 'react';
import shortid from 'shortid';
import Container from './components/Container';
import ContactsEditor from './components/ContactsEditor';
import ContactsList from './components/ContactsList';

class App extends Component {
  state = {
    contacts: [],
  };

  addContact = (name) => {
    const contact = {
      id: shortid.generate(),
      name,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactsEditor onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactsList contacts={contacts} />
      </Container>
    );
  }
}

export default App;
