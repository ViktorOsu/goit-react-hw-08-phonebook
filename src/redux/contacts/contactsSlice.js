import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOperations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

export const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    onFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.fulfilled](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = payload;
    },
    [addContact.fulfilled](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(payload);
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        task => task.id === payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
  },
});

export const { onFilter } = phoneBookSlice.actions;
export const contactsReducer = phoneBookSlice.reducer;
