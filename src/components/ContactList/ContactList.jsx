import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contactData }) {
  return (
    <ul className={css.list}>
      {contactData.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
