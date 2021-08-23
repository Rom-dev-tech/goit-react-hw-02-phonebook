import React, { Component } from 'react';
import '../ContactsEditor/ContactsEditor.scss';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactsEditor extends Component {
  state = { ...INITIAL_STATE };

  onChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <label className="form__label">
          <span className="form__name">Name</span>
          <input
            className="form__input"
            value={this.state.name}
            onChange={this.onChange}
            autoComplete="off"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label>
          <span className="form__name">Number</span>
          <input
            className="form__input"
            value={this.state.number}
            onChange={this.onChange}
            autoComplete="off"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className="form__button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactsEditor;
