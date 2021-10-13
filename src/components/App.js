import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import '../stylesheets/App.css';
import contacts from '../utils/contacts';
import {addContacts} from '../action';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import LeftView from './LeftView';
import RightView from './RightView';

function App(props) {
  const [showConvo,setConvo] = useState(false);
  const {dispatch,user}=props;
  const user1=contacts[0];
  useEffect(()=>{
    dispatch(addContacts(contacts));
  },[dispatch])
  
  return (
    <div className="flex">
        <div className="w-30">
          <LeftView showConvo={showConvo} setConvo={setConvo}/>
        </div>
        <div className="w-70">
          {/* <RightView showConvo={showConvo} setConvo={setConvo} /> */}
          <Switch>
            <Route 
              path='/'
              exact
              render={(props)=>{
                return(
                  <RightView
                  {...props}
                  showConvo={showConvo} 
                  setConvo={setConvo} 
                  user={user}
                  />
                );
              }}            
            />
            <Route 
              path='/user1'
              exact
              render={(props)=>{
                return(
                  <RightView
                  {...props}
                  showConvo={showConvo} 
                  setConvo={setConvo} 
                  user={user1}
                  />
                );
              }}            
            />
          </Switch>
        </div>  
    </div>
  );
}

function mapStatetoprops(state){
  return{
    contacts:state.contacts,
    user:state.loggedInUser
  }
}

const connectedComponent=connect(mapStatetoprops)(App);

export default connectedComponent;
