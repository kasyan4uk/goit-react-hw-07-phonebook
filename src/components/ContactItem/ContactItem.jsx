import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/operations';
import { Item, Text, Button, BtnWrapper } from './ContactItem.styled';

const ContactItem = props => {
  const { id, name, number,} = props;

  const dispatch = useDispatch();

  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <BtnWrapper>
        <Button
          type="button"
          onClick={() => {
            dispatch(removeContact(id));
          }}
        >
          Delete
        </Button>
      </BtnWrapper>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
