import { ADD_CONTACTS, FILTER_CONTACTS,SEND_MESSAGE } from "./actionTypes";


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

export function sendMessage(user,message,timestamps){
    return{
        type:SEND_MESSAGE,
        user,
        message,
        timestamps
    }
}