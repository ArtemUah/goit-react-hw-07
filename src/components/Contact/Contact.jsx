import { FaPhoneAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import css from '../Contact/Contact.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function ({contact}) {
    const dispatch = useDispatch();
    return (<div className={css.container} >
    <div>
        <p className={css.text}><FaPhoneAlt/> {contact.name}</p>
        <p className={css.text}><IoIosContact/> {contact.number}</p>
    </div>
    <button type='button' className={css.btn} onClick={()=>dispatch(deleteContact(contact.id))}>Delete</button>
    </div>)
}