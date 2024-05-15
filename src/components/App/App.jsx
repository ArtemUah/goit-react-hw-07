import { useState, useEffect } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import css from '../App/App.module.css';
import ContactList from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { selectContacts, selectError, selectLoading } from '../../redux/contactsSlice';


function App() {
  const selectListOfContacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

useEffect(()=>{
  dispatch(fetchContacts());
},[dispatch]);

  return (
    <div className={css.container}>
    <h1>Phonebook</h1>
    <ContactForm />
    <SearchBox />
    {isLoading && <b>Is Loading...</b>}
    {isError && <b>{isError}</b>}
    {selectListOfContacts.length > 0 && <ContactList />
}
    </div>
  )
}

export default App
