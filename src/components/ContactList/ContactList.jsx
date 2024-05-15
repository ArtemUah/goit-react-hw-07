import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import css from '../ContactList/ContactList.module.css'


export default function () {
    const selectContacts = useSelector((state)=> state.contacts.items);
    const selectNameFilter = useSelector((state) => state.filters.name)
    const filteredContacts = selectContacts.filter(contact => contact.name.toLowerCase().includes(selectNameFilter.toLowerCase().trim()));

    return (<ul className={css.container}>
        {filteredContacts.map(contact =>{
    return (<li key={contact.id}>
                <Contact contact={contact} />
            </li>)
        })}
    </ul>)
}