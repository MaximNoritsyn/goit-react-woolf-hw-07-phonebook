import axios from "axios";

const client = axios.create({
    baseURL: 'https://663e62ace1913c4767977cef.mockapi.io/contacts',
    json: true
});

export const fetchContacts = async () => {
    const response = await client.get('/contacts');
    return response.data;
}

export const addContact = async (contact) => {
    const response = await client.post('/contacts', contact);
    return response.data;
}

export const deleteContact = async (id) => {
    const response = await client.delete(`/contacts/${id}`);
    return response.data;
}