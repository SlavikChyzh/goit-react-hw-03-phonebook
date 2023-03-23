import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Conteiner } from './Element/Element.styled';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = cont => {
    const newContact = {
      ...cont,
      id: nanoid(),
    };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };
  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };
  onChange = ({ target }) => {
    this.setState({ filter: target.value });
  };
  filterContacts = (arr, filter) => {
    return arr.filter(ell =>
      ell.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <Conteiner>
        <h3>PhoneBook</h3>
        <ContactForm
          contacts={this.state.contacts}
          addContact={this.addContact}
        ></ContactForm>
        <Filter onChange={this.onChange} filter={this.state.filter}></Filter>
        <h3>Contacts</h3>
        <ContactList
          contacts={this.filterContacts(this.state.contacts, this.state.filter)}
          deleteContact={this.deleteContact}
        ></ContactList>
      </Conteiner>
    );
  }
}
