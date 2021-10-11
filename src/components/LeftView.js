import { connect } from 'react-redux';
import React, { useState,useEffect } from 'react';

import UserCard from './UserCard';
import Contacts from '../utils/contacts';
import {filter} from '../action';

 function LeftView(props){
    const [searchbar , setValue]=useState("");
    
    const {dispatch,setConvo}=props;
    const handleChange=  (e) =>{
        const newValue=e.target.value
        setValue(newValue);
    }
    
   

    useEffect(()=>{
        const filteredContacts= Contacts.filter((contact)=>{
                return contact.userName
                .toLowerCase()
                .includes(searchbar.toLowerCase());
            })
        dispatch(filter(filteredContacts));
    },[searchbar,dispatch]);

    const changeShowConvo = (e) =>{
        console.log('hiiiiii');
        setConvo(true);
    }
    
    const {contacts}=props;
    return(
        <div className="leftsidebar">
            <div className="personalInfo">
                 <span  className="logInuser"> <img src= {props.loggedInUser.img} alt="profile"/></span>
                <span className="logInuser" >{props.loggedInUser.name}</span>
                <span className="logInuser phone" >{props.loggedInUser.phoneNo}</span>
            </div>
            <div className="searchbar">
                <input type="text" placeholder="   Search.. " name="search" onChange={handleChange}/>
                <span  className="icon" >
                    <img src="https://cdn-icons-png.flaticon.com/512/751/751463.png" alt="search" />
                </span>
                <div className="add-convo">
                    <span className="text">
                         Create Conversation
                    </span>
                    <span className="add-img">
                        <img src= "https://cdn-icons.flaticon.com/png/512/863/premium/863823.png?token=exp=1633960669~hmac=50fa37db1705b19d07a84546b7b68abc" onClick={changeShowConvo} alt="add"/>
                    </span>
                </div>
            </div>
            <div className="scroll">
                {contacts.length <9 ? contacts.map((user=>{
                    return <UserCard user={user} key={ user.id} />
                })):
                contacts.map((user)=>(
                    user.chats.length >0 ? <UserCard user={user} key={user.id} /> : null   
                ))}
            </div>
           
        </div>
    )
}


function mapStatetoprops(state){
    return{
        contacts:state.contacts,
        loggedInUser:state.loggedInUser
    }

}

const connectedComponent=connect(mapStatetoprops)(LeftView);
export default connectedComponent;