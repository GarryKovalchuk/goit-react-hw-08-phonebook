import './ContactList.module.css';
import { Loader } from '../../components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useContacts } from './Hooks/hooks';
import { contactsOperations } from '../../redux/Contacts/contactsOps';
import { deleteToast } from '../Toasts';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/Author/author-selectors';

export const ContactsList = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const dispatch = useDispatch();
  const { contacts, isLoaging, filter, deleteContact, setFilter } =
    useContacts();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);
  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = findContacts();

  return (
    <>
      {isLoaging && <Loader />}
      {isLoggedIn && (
        <ul>
          {contacts &&
            filteredContacts.map(({ id, name, number }) => {
              return (
                <li key={id}>
                  <h3>{name}:</h3>
                  <p>{number}</p>
                  <button
                    type="button"
                    onClick={() => {
                      deleteContact(id);
                      deleteToast(`${name} tel:${number} is deleted`);
                      setFilter('');
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
        </ul>
      )}
    </>
  );
};
