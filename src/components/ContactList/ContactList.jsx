import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({
  contactData,
  arrContacts,
  inputValue,
  onDelete,
}) {
  if (inputValue === "") {
    console.log(inputValue);
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
  return (
    <ul className={css.list}>
      {arrContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
