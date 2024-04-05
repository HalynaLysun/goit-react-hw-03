import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ arrContacts }) {
  return (
    <ul className={css.list}>
      {arrContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
