import { List } from './ContactList.styled';
import ContactItem from '../ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <List>
        {filteredContacts.map(({ name, number, id }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
            />
          );
        })}
      </List>
    </>
  );
}

export default ContactList;
