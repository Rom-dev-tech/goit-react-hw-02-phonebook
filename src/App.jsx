import React, { Component } from 'react';
import shortid from 'shortid';
import toastr from 'toastr';
import toastrOptions from './components/Notification';
import Container from './components/Container';
import ContactsFomr from './components/ContactsFomr';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  checkNameValidatiton = (newName) => {
    const contacts = this.state.contacts;
    return contacts.find(({ name }) => name === newName);
  };

  addContact = ({ name, number }) => {
    if (!this.checkNameValidatiton(name)) {
      const contact = {
        id: shortid.generate(),
        name,
        number,
      };

      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
      return;
    }

    toastr.error(`${name} is already in contacts`);
    toastrOptions();
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactsFomr onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList contacts={visibleContacts} />
      </Container>
    );
  }
}

// toastr.options = {
//   closeButton: true,
//   debug: false,
//   newestOnTop: false,
//   progressBar: true,
//   positionClass: 'toast-top-right',
//   preventDuplicates: false,
//   onclick: null,
//   showDuration: '300',
//   hideDuration: '1000',
//   timeOut: '3000',
//   extendedTimeOut: '500',
//   showEasing: 'swing',
//   hideEasing: 'linear',
//   showMethod: 'fadeIn',
//   hideMethod: 'fadeOut',
// };

export default App;
