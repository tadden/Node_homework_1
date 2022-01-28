const argv = require('yargs').argv;
const contactsOperations = require("./contacts");


const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const contacts = await contactsOperations.listContacts();
            console.table(contacts)
            break

        case 'get':
            const contact = await contactsOperations.getContactById(String(id))
            console.log(contact);
            break

        case 'add':
            const newContact = await contactsOperations.addContact(name, email, phone);
            console.log(newContact);
            break

        case 'remove':
            const removeContact = await contactsOperations.removeContact(String(id));
            console.log(removeContact);
            break

        default:
            console.warn('\x1B[31m Unknown action type!');
    }
};

// invokeAction({ action: 'list' });
// invokeAction({ action: 'get', id:'5' });
// invokeAction({ action: 'add', name: 'ilja', email: 'tadden12@gmail.com', phone: '27834930' });
// invokeAction({ action: 'remove', id:'3' });
invokeAction(argv);