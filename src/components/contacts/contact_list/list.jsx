import { useEffect } from 'react'
import css from './list.module.css';
import { ContactItem } from '../contact/item';
import { useDispatch, useSelector } from 'react-redux'
import { fetchContactsAsync } from '../../../store/contacts/slice';
import { useFilteredContacts } from '../../../store/selectors';


export const ContactList = () => {

    const contacts = useSelector(useFilteredContacts);

    const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchContactsAsync())
	}, [dispatch])

    return (
        <ul className={css.list }>
            {contacts.map(contact => (<ContactItem key={contact.id} contact={contact}/>))}
        </ul>
    );
}