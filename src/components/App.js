import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';

import '../stylesheets/App.css';
import contacts from '../utils/contacts';
import {addContacts} from '../action';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import LeftView from './LeftView';
import RightView from './RightView';

function App(props) {
  const [showConvo,setConvo] = useState(false);
  const {dispatch}=props;

  useEffect(()=>{
    dispatch(addContacts(contacts));
  },[dispatch])
  
  return (
    <div className="flex">
        <div className="w-30">
          <LeftView showConvo={showConvo} setConvo={setConvo}/>
        </div>
        <div className="w-70">
          <RightView showConvo={showConvo} setConvo={setConvo} />
        </div>
    </div>
  );
}

function mapStatetoprops(state){
  return{
    contacts:state.contacts
  }
}

const connectedComponent=connect(mapStatetoprops)(App);

export default connectedComponent;
