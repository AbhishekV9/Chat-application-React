import { ADD_CONTACTS } from "./actionTypes";


export function addContacts(contacts){
    return{
        type:ADD_CONTACTS,
        contacts
    }
}