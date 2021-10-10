import { connect } from 'react-redux';
import React, { useState,useEffect } from 'react';

import UserCard from './UserCard';
import Contacts from '../utils/contacts';
import {filter} from '../action';

 function LeftView(props){

    const [searchbar , setValue]=useState("");

    const handleChange=  (e) =>{
        const newValue=e.target.value
         setValue(newValue);
        // console.log(newValue);
        // console.log("search",searchbar);
        // const filteredContacts=await Contacts.filter((contact)=>{
        //     return contact.userName
        //     .toLowerCase()
        //     .includes(searchbar.toLowerCase());
        // })
        // console.log("filter",filteredContacts);
        // await props.dispatch(filter(filteredContacts));
    }


    useEffect(()=>{
        const filteredContacts= Contacts.filter((contact)=>{
                return contact.userName
                .toLowerCase()
                .includes(searchbar.toLowerCase());
            })
        props.dispatch(filter(filteredContacts));
    },[searchbar]);

    const {contacts}=props;
    return(
        <div className="leftsidebar">
            <div className="personalInfo">
                <h3>Personal information</h3>
            </div>
            <div className="searchbar">
                <input type="text" placeholder="Search.." name="search" onChange={handleChange}/>
            </div>
            <div>
                {contacts.map((user)=>(
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