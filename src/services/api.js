import axios from 'axios';

axios.defaults.baseURL = 'https://648b4e5717f1536d65eac34d.mockapi.io/';

export async function fetchContacts() {
  const response = await axios.get(`/contacts/contacts`);
  return response.data;
}

export async function addContact(newContact) {
  const response = await axios.post(`/contacts/contacts`, newContact);
  return response.data;
}

export async function deleteContact(contactId) {
  const response = await axios.delete(`/contacts/contacts/${contactId}`);
  return response.data;
}
