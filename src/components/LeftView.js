import { connect } from 'react-redux';
import React, { useState,useEffect } from 'react';

import UserCard from './UserCard';
import Contacts from '../utils/contacts';
import {filter} from '../action';

 function LeftView(props){
     //creating local state from react hook useState
    const [searchbar , setValue]=useState("");

    //getting informations from props
    const {dispatch,setConvo,contacts}=props;

    //function for handling change on searchbar
    const handleChange=  (e) =>{
        const newValue=e.target.value
        setValue(newValue);
    }

    //using react hook useEffect for dispatching an action of filtering contacts on the basis of text present in seaarchbar
    useEffect(()=>{
        const filteredContacts= Contacts.filter((contact)=>{
                return contact.userName
                .toLowerCase()
                .includes(searchbar.toLowerCase());
            })
        dispatch(filter(filteredContacts));
    },[searchbar,dispatch]);

    //changing value of showConvo wich we have recived as props through setConvo.
    const changeShowConvo = (e) =>{
        setConvo(true);
    }
    
    return(
        <div className="leftsidebar">
            <div className="personalInfo">
                 <span  className="logInuser"> <img src= {props.loggedInUser.img} alt="profile"/></span>
                <span className="logInuser" >{props.loggedInUser.name}</span>
                <span className="logInuser phone" >{props.loggedInUser.phoneNo}</span>
            </div>
            <div className="searchbar">
                <input type="text" placeholder="   Search.. " name="search" onChange={handleChange} value={searchbar}/>
                <span  className="icon" >
                    <img src="https://cdn-icons-png.flaticon.com/512/751/751463.png" alt="search" />
                </span>
                <div className="add-convo">
                    <span className="text">
                         Create Conversation
                    </span>
                    <span className="add-img">
                        <img src= "https://cdn-icons-png.flaticon.com/512/1828/1828574.png" onClick={changeShowConvo} alt="add"/>
                    </span>
                </div>
            </div>

            {/* rendering usercard for the users present with required information */}
            <div className="scroll">
                {contacts.length <9 ? contacts.map((user=>{
                    return <UserCard user={user} key={ user.id} setValue={setValue} />
                })):
                contacts.map((user)=>(
                    user.chats.length >0 ? <UserCard user={user} key={user.id} setValue={setValue} /> : null   
                ))}
            </div>
           
        </div>
    )
}

//returns the required data from global state
function mapStatetoprops(state){
    return{
        contacts:state.contacts,
        loggedInUser:state.loggedInUser
    }

}

//using connect to connect this component to global store
const connectedComponent=connect(mapStatetoprops)(LeftView);

export default connectedComponent;