import { ADD_CONTACTS } from "../action/actionTypes";


const initialState={
    contacts:[],
    loggedInUser:{
        name:'Abhishek Verma',
        id:0,
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
        default:
            return state;
    }
}