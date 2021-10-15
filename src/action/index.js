//importing action types
import { ADD_CONTACTS, FILTER_CONTACTS,SEND_MESSAGE } from "./actionTypes";

//all the below functions returns the type of actions and required data to change store state on the basis of activity performed

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