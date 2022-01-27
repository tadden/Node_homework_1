const fs = require("fs/promises");
const path = require("path");

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


function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact
}