import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Oval as Spiner } from 'react-loader-spinner';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Container, MainTitle, Title } from './App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import ErrorMessage from './ErrorMessage';

function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Title>
        Contacts
        {isLoading && (
          <Spiner
            height={25}
            width={25}
            color="#4fa94d"
            visible={true}
            ariaLabel="oval-loading"
            strokeWidth={7}
          />
        )}
      </Title>
      <Filter />
      {error ? <ErrorMessage /> : <ContactList />}
    </Container>
  );
}

export default App;
