import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import contacts from "../contacts.json";
import { useState } from "react";

export default function App() {
  // const [contactData, setContactsData] = useState(contacts);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const arrContacts = contacts.filter((el) => {
    const contactName = el.name.toLowerCase();
    return contactName.includes(inputValue.toLowerCase());
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox input={inputValue} onChange={handleChange} />
      <ContactList arrContacts={arrContacts} />
    </div>
  );
}
