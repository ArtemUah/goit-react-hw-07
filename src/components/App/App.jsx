import { useState, useEffect } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import css from '../App/App.module.css';
import ContactList from '../ContactList/ContactList';
import { useSelector } from 'react-redux';


function App() {
  const selectContacts = useSelector((state) => state.contacts.items);

  return (
    <div className={css.container}>
    <h1>Phonebook</h1>
    <ContactForm />
    <SearchBox />
    {selectContacts.length > 0 && <ContactList />
}
    </div>
  )
}

export default App
