import { connect } from 'react-redux';
import React, { useEffect} from 'react';

import '../stylesheets/App.css';
import contacts from '../utils/contacts';
import {addContacts} from '../action';

function App(props) {
  const {dispatch}=props;

  useEffect(()=>{
    dispatch(addContacts(contacts));
  },[dispatch])
  
  return (
    <h1>Hellow</h1>
  );
}

function mapStatetoprops(state){
  return{
    contacts:state.contacts
  }
}

const connectedComponent=connect(mapStatetoprops)(App);

export default connectedComponent;
