import { createSelector } from '@reduxjs/toolkit'

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter.filter;

export const useFilteredContacts = createSelector(
    selectContacts,
    selectFilter,
    (contacts, filter) => {
        if (!filter) {
            return contacts;
        }
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    }
)

