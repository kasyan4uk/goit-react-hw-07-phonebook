import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  editContact,
  fetchContacts,
  removeContact,
} from './operations';

function isRejectedAction(action) {
  return action.type.endsWith('rejected');
}

function isPendingAction(action) {
  return action.type.endsWith('pending');
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setError(state) {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          items: [...state.items, payload],
        };
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          items: state.items.map(contact =>
            contact.id !== payload.id ? contact : payload
          ),
        };
      })
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          items: state.items.filter(contact => contact.id !== payload.id),
        };
      })
      .addMatcher(isPendingAction, state => {
        state.isLoading = true;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setError } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
