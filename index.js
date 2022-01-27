const argv = require('yargs').argv;
const contactsOperations = require("./contacts")

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const contacts = await contactsOperations.listContacts();
            console.table(contacts)
            break

        case 'get':
            const contact = await contactsOperations.getContactById((id))
            console.log(contact);
            break

        case 'add':
            // ... name email phone
            break

        case 'remove':
            // ... id
            break

        default:
            console.warn('\x1B[31m Unknown action type!');
    }
};

// invokeAction({ action: 'list' });
// invokeAction({ action: 'get', id:'1' });