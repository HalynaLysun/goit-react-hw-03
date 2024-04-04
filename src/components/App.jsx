import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import contacts from "../contacts.json";
import { useState } from "react";

export default function App() {
  const [contactData, setContactsData] = useState(contacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contactData={contactData} />
    </div>
  );
}
