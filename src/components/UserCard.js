import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import contacts from '../utils/contacts';
import {addContacts} from '../action';

function userCard(props){
    //getting information from props
    const{setValue,dispatch,user}=props;

    //when you click on user card this function is triggered to dispatch an action and setting value of searchbar as empty
    const handleClick=()=>{
        dispatch(addContacts(contacts));      
        if(setValue){
            setValue("");
        }
    }
    const length=user.chats.length-1;
    const link=`/user${user.id}`
    
    //using Link to guide to the user conversation 
    return(
       <Link to={link} style={{ textDecoration: 'none' }} onClick={handleClick} >
            <div className="flex w-100 h-60px userCard p3">
            <div className="w-20 p1">
                <div className="profile-picture">
                     <img src={user.photo} alt="pro" /> 
                </div>
            </div>
            <div className="w-80 p">
                <div className="userdetails" >
                    <span className="username"> {user.userName} </span>
                    <span className="time">{length!==-1 ? user.chats[length].timestamps : null }</span>
                </div>   
                <span className="message">
                    {length=== -1 ? null : 
                    user.chats[length].message.length<35 ? user.chats[length].message : user.chats[length].message.substring(0,35)+" ..."}
                </span>                       
            </div>
            </div>
       </Link>
    )

}

//returns the required data from global state
function mapStateToProps(state){
    return{
        ...state
    }
}

//using connect to connect this component to global store
const connectedComponent=connect(mapStateToProps)(userCard);


export default connectedComponent;