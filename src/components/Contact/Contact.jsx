import { RiUser3Fill } from "react-icons/ri";
import { BiSolidPhone } from "react-icons/bi";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  return (
    <div className={css.wrapper}>
      <div>
        {" "}
        <h1>
          <RiUser3Fill />
          {contact.name}
        </h1>
        <p>
          <BiSolidPhone />
          {contact.number}
        </p>
      </div>

      <button type="button" className={css.button}>
        Delete
      </button>
    </div>
  );
}
