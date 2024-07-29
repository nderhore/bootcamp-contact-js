import {Contact} from "../models/Contact.js";


const listContacts = [];


document.getElementById("creation-contact")
    .addEventListener("submit", event => {
    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const telephone = document.getElementById("telephone").value;

    addContact(nom,prenom,telephone);
    document.getElementById("creation-contact").reset();

});

function addContact(nom, prenom, telephone){
    const contact = new Contact(nom,prenom,telephone);
    listContacts.push(contact);
    displayContact(contact)
}

function displayContact(contact){

    //recuperation du tbody de ma table ayant pour id 'list-contact'
    const tableBody = document.querySelector("#list-contact tbody");

    //creation d'une ligne de mon tableau
    const newRow = document.createElement("tr");

    //creation de mes données
    const nomCell = document.createElement("td");
    nomCell.innerText = contact.nom
    newRow.appendChild(nomCell);

    const prenomCell = document.createElement("td");
    prenomCell.innerText = contact.prenom
    newRow.appendChild(prenomCell);

    const telephoneCell = document.createElement("td");
    telephoneCell.innerText = contact.telephone
    newRow.appendChild(telephoneCell);

    tableBody.appendChild(newRow);
}
