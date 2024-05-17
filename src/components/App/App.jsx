import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import "./App.css";

export default function App() {
  return (
    <div>
<h1>
  <span>P</span>
  <span>h</span>
  <span>o</span>
  <span>n</span>
  <span>e</span>
  <span>b</span>
  <span>o</span>
  <span>o</span>
  <span>k</span>
</h1>

      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
