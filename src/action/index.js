import { ADD_CONTACTS, FILTER_CONTACTS } from "./actionTypes";


export function addContacts(contacts){
    return{
        type:ADD_CONTACTS,
        contacts
    }
}

export function filter(contacts){
    return{
        type:FILTER_CONTACTS,
        contacts
    }
}