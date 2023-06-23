import { useDispatch, useSelector } from 'react-redux';
import { setError } from 'redux/contactsSlice';
import { selectError } from 'redux/selectors';
import { ErrorButton, ErrorText, ErrorWrapper } from './ErrorMessage.styled';

export default function ErrorMessage() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  return (
    <ErrorWrapper>
      <ErrorText>{error}</ErrorText>
      <ErrorButton type="button" onClick={() => dispatch(setError())}>
        Close message
      </ErrorButton>
    </ErrorWrapper>
  );
}
