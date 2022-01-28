const fs = require("fs/promises");
const path = require("path");
const {v4} = require("uuid");

const contactsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
};

const getContactById = async contactId => {
    const contacts = await listContacts();
    const contactById = contacts.find(contact => contact.id === contactId);
    if (!contactById) {
        return null;
    }
    return contactById;
};

const addContact = async (name, email, phone) => {
    const contacts = await listContacts();
    const newContact = { id: v4(), name, email, phone,  }; 
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
};
  


const removeContact = async (contactId) => {
    const contacts = await listContacts();
    const idx = contacts.findIndex(contact => contact.id === contactId);
    if (idx === -1) {
        return null;
    }
    const [contact] = contacts.splice(idx, 1)
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return contact;

};



module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact
}