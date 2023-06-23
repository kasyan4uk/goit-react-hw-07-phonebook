import { Formik, Field } from 'formik';
import { StyledForm, Label, Input, Span, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleAddContact = contactInfo => {
    if (contacts.find(contact => contact.name === contactInfo.name)) {
      alert(`${contactInfo.name} is already in contacts.`);
      return '';
    }
    dispatch(addContact(contactInfo));
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, { resetForm }) => {
        handleAddContact(values);
        resetForm();
      }}
    >
      {props => {
        return (
          <StyledForm>
            <Label>
              <Span>Name</Span>
              <Field
                as={Input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                autoFocus
              />
            </Label>
            <Label>
              <Span>Number</Span>
              <Field
                as={Input}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </Label>
            <Button type="submit">Add contact</Button>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
