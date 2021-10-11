import { ADD_CONTACTS,FILTER_CONTACTS } from "../action/actionTypes";


const initialState={
    contacts:[],
    loggedInUser:{
        name:'Abhishek Verma',
        id:0,
        img:"https://images.unsplash.com/photo-1563584316028-2b70b3a3a8bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
        phoneNo:"7000482884"
    }
}

export default function rootReducer(state=initialState,action){
    switch(action.type){
        case ADD_CONTACTS:{
            return{
                ...state,
                contacts:action.contacts
            }
        }
        case FILTER_CONTACTS:{
            return{
                ...state,
                contacts:action.contacts
            }
        }
        default:
            return state;
    }
}