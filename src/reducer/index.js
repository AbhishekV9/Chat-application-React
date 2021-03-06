//importing action types
import { ADD_CONTACTS,FILTER_CONTACTS,SEND_MESSAGE} from "../action/actionTypes";

//giving initial state to the store
const initialState={
    contacts:[],
    loggedInUser:{
        name:'Abhishek Verma',
        id:0,
        img:"https://images.unsplash.com/photo-1563584316028-2b70b3a3a8bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
        phoneNo:"7000482884"
    }
}

//changing store state on the basis of action type
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
        case SEND_MESSAGE:{
            const newObj={
                message:action.message,
                sender:"self",
                timestamps:action.timestamps
            }
            const cont=state.contacts.map(contact => ({...contact}));
            console.log(".lk[kpoom",cont[action.user.id-1]);
            cont[action.user.id-1].chats.push(newObj);
            return{
                ...state,
                contacts:cont
            }
        }
        default:
            return state;
    }
}