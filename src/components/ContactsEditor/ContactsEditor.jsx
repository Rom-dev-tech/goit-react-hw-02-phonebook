import React, { Component } from 'react';

class ContactsEditor extends Component {
  state = {
    name: '',
  };

  handleChange = (e) => {
    this.setState({ name: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.name);

    this.setState({ name: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            value={this.state.name}
            onChange={this.handleChange}
            autoComplete="off"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactsEditor;