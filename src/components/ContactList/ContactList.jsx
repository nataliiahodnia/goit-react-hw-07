import Contact from "../Contact/Contact";

import { useSelector } from "react-redux";
import { selectFilteredContacts } from '../../redux/contactsSlice'

import css from "./ContactList.module.css";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.list}>
        {filteredContacts.map((filteredContacts) => (
        <Contact key={filteredContacts.id} filteredContacts={filteredContacts} />
        ))}
      </ul>
    </>
  );
}
