import { MdPerson } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <div className={css.card}>
      <div className={css.cardItem}>
        <p className={css.text}>
          <MdPerson className={css.icon} size="26" />
          {contact.name}
        </p>

        <p className={css.text}>
          <FaPhone className={css.icon} size="20" />
          {contact.number}
        </p>
      </div>
      <div className={css.cardItem}>
        <button className={css.button} onClick={() => onDelete(contact.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
