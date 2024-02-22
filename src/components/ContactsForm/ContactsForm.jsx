import { useState } from 'react';
import './ContactForm.module.css';
import { useContacts } from './Hooks/hooks';
import { infoToast, successToast } from './Toasts';

export const ContactForm = () => {
  const { contacts, addContact } = useContacts();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const contact = { name, number };
    const isExists = contacts.some(
      i => i.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isExists) {
      infoToast(`${name} or ${number} is already in contacts`);
    } else {
      addContact({ name, number });
      successToast('Контакт успішно додано до списку 😃');
    }
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Назва може містити лише літери, апостроф, тире та пробіли. Наприклад Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        placeholder="phone number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефону має складатися з цифр і може містити пробіли, тире, круглі дужки та може починатися з +"
        required
      />

      <button type="submit">Add contact</button>
    </form>
  );
};
