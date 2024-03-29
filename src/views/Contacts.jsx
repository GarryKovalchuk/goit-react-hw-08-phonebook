import s from '../Styles.module.css';
import { ContactsForm } from '../components/ContactsForm';
import { Filter } from '../components/Filter';
import { ContactsList } from '../components/ContactsList';

const Contacts = () => {
  return (
    <div className={s.view__container}>
      <h2 className={s.home__title}>
        Enter a name and phone number to add a contact
      </h2>
      <ContactsForm />
      <Filter />
      <ContactsList />
    </div>
  );
};

export default Contacts;
