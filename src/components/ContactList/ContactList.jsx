import { useState } from 'react';
import { List } from './ContactList.styled';
import ContactItem from '../ContactItem';
import Modal from '../Modal';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

function ContactList() {
  const [modalData, setModalData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const filteredContacts = useSelector(selectFilteredContacts);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

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
              setModalData={setModalData}
              toggleModal={toggleModal}
            />
          );
        })}
      </List>
      {isModalOpen && <Modal modalData={modalData} toggleModal={toggleModal} />}
    </>
  );
}

export default ContactList;
