import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {fetchContacts, addContact, deleteContact} from '../../services/api';

const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}

const handleRejected = (state, { error }) => {
	state.isLoading = false
	state.error = error.message
}

const handleFulfilled = (state) => {
	state.isLoading = false
}

export const fetchContactsAsync = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        return await fetchContacts();
    }
);

export const addContactAsync = createAsyncThunk(
    'contacts/addContact',
    async (contact) => {
        return await addContact(contact);
    }
);

export const deleteContactAsync = createAsyncThunk(
    'contacts/deleteContact',
    async (id) => {
        return await deleteContact(id);
    }
);

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContactsAsync.pending, handlePending)
            .addCase(fetchContactsAsync.rejected, handleRejected)
            .addCase(fetchContactsAsync.fulfilled, (state, { payload }) => {
                state.items = payload
                handleFulfilled(state)
            })
            .addCase(addContactAsync.pending, handlePending)
            .addCase(addContactAsync.rejected, handleRejected)
            .addCase(addContactAsync.fulfilled, (state, { payload }) => {
                state.items = [...state.items, payload]
                handleFulfilled(state)
            })
            .addCase(deleteContactAsync.pending, handlePending)
            .addCase(deleteContactAsync.rejected, handleRejected)
            .addCase(deleteContactAsync.fulfilled, (state, { meta }) => {
                state.items = state.items.filter(contact => contact.id !== meta.arg)
                handleFulfilled(state)
            })
    }
});

export const reducerContacts = contactsSlice.reducer;