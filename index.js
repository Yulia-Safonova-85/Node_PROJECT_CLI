const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");

const contactService = require("./db/contacts");

const invokeAction = async({ action, id, name, email, phone })=>{
    switch (action) {
        case "list":
          const allContacts = await contactService.listContacts();
          return console.table(allContacts)
          
        case "get":
          const contactName = await contactService.getContactById(id);
          return console.table(contactName)
          
        case "add":
          const newContact = await contactService.addContact({name, email, phone});
          return console.table(newContact);
          
        case "remove":
          const deleteContact = await contactService.removeContact(id);
          return console.table(deleteContact)
         
        default:
          console.warn("\x1B[31m Unknown action type!");
      }

}
const argv = require("yargs").argv;

invokeAction(argv)


