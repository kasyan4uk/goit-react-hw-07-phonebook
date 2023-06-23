import { createPortal } from 'react-dom';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import {
  Overlay,
  StyledModal,
  StyledForm,
  Label,
  Input,
  Span,
  Button,
} from './Modal.styled';
import { editContact } from 'redux/operations';

function Modal({ modalData, toggleModal }) {
  const { name, number, id } = modalData;
  const dispatch = useDispatch();

  const handleCloseModal = useCallback(
    e => {
      if (e.target === e.currentTarget || e.code === 'Escape') {
        toggleModal();
      }
    },
    [toggleModal] // ЯК ПРАВИЛЬНО МЕМОЇЗУВАТИ???
  );

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    return () => window.removeEventListener('keydown', handleCloseModal);
  }, [handleCloseModal]);

  return createPortal(
    <Overlay onClick={handleCloseModal}>
      <StyledModal>
        <Formik
          initialValues={{ name, number, id }}
          onSubmit={values => {
            dispatch(editContact(values));
            toggleModal();
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
                    autoFocus
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
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
                <div>
                  <Button type="submit" disabled={props.isSubmitting}>
                    Edit contact
                  </Button>
                  <Button
                    type="button"
                    disabled={props.isSubmitting}
                    onClick={() => toggleModal()}
                  >
                    Cancel
                  </Button>
                </div>
              </StyledForm>
            );
          }}
        </Formik>
      </StyledModal>
    </Overlay>,
    document.querySelector('#modal')
  );
}

Modal.propTypes = {
  modalData: PropTypes.object.isRequired,
};

export default Modal;
