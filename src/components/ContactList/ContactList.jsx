import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import css from '../ContactList/ContactList.module.css'
import { selectFilteredContacts } from "../../redux/contactsSlice"


export default function () {
    const filteredContacts = useSelector(selectFilteredContacts);

    return (<ul className={css.container}>
        {filteredContacts.map(contact =>{
    return (<li key={contact.id}>
                <Contact contact={contact} />
            </li>)
        })}
    </ul>)
}