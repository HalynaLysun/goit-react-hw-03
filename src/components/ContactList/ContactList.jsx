import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contactData, arrContacts, input }) {
  console.log(input);
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
// console.log(input.trim().length);
// console.log(arrContacts);
// if (input.trim().length === 0) {

// } else {
//   <ul className={css.list}>
//     {arrContacts.map((contact) => (
//       <li className={css.item} key={contact.id}>
//         <Contact contact={contact} />
//       </li>
//     ))}
//   </ul>;
// }
// input.trim().length === 0 ? (
//   <ul className={css.list}>
//     {contactData.map((contact) => (
//       <li className={css.item} key={contact.id}>
//         <Contact contact={contact} />
//       </li>
//     ))}
//   </ul>
// ) : (
//   <ul className={css.list}>
//     {arrContacts.map((contact) => (
//       <li className={css.item} key={contact.id}>
//         <Contact contact={contact} />
//       </li>
//     ))}
//   </ul>
// );
