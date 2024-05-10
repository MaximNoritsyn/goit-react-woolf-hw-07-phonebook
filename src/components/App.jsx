import { ContactForm } from './contact_form/form.jsx';
import { Filter } from './filter/filter.jsx';
import { ContactList } from './contacts/contact_list/list.jsx';

export const App = () => {

  return <div
    style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      fontSize: 20,
      color: '#010101',
      backgroundColor: '#f0f0f0'
    }}
  >
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <ContactList />
  </div>
};
