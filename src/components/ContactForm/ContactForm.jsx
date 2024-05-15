import { useId } from 'react';
import * as Yup from "yup";
import { nanoid } from 'nanoid';
import { Formik, Field, Form, ErrorMessage} from "formik";
import css from '../ContactForm/ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const FeedbackSchema = Yup.object().shape({
    name:Yup.string().trim().min(3, 'Too Short. Min 3 symbols.').max(50, 'Too Long. Max 50 symbols.').required('Required to enter'),
    number:Yup.string().min(9, 'Must be 7 numbers').max(9, 'Must be 7 numbers').matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format").required('Required to enter')
});


export default function () {
    const dispatch = useDispatch();
    const nameId = useId();
    const numberId = useId();
    const handleSubmit = (values, actions) => {
        values.id = nanoid();
        dispatch(addContact(values));
        actions.resetForm();
    };
    return (<Formik initialValues={{id:'', name: '', number: ''}} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form className={css.form}>
        <div className={css.container}><label className={css.label} htmlFor={nameId}>Name</label>
        <Field className={css.input} name='name' id={nameId}/>
        <ErrorMessage className={css.span} name='name' component='span'/>
</div>
       <div className={css.container}> <label  htmlFor={numberId}>Number</label>
        <Field className={css.input} name='number' id={numberId}/>
        <ErrorMessage className={css.span} name='number' component='span'/>
</div>
        <button className={css.btn} type='submit'>Add contact</button>
        </Form>
    </Formik>)
}