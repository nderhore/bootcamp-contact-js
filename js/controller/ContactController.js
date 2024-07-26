import {Contact} from "../models/Contact.js";


let listContacts = [];

const contact = new Contact("dupont","anne","0789651232");
const contactDeux = new Contact("deue","e","0789651231");

for(let i = 0; i<100; i++){
    listContacts.push(new Contact("dupont","anne","0789651232"));
}
console.log(listContacts);