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
  
  //creating local state showConvo  with react hook useState , showConvo is responsible for showing all the contacts when clicked on Create conversation icon  
  const [showConvo,setConvo] = useState(false);

  //getting data from global store
  const {dispatch,user}=props;

  //getting all the users from dummy data
  const user1=contacts[0];
  const user2=contacts[1];
  const user3=contacts[2];
  const user4=contacts[3];
  const user5=contacts[4];
  const user6=contacts[5];
  const user7=contacts[6];
  const user8=contacts[7];
  const user9=contacts[8];
  const user10=contacts[9];
  const user11=contacts[10];
  const user12=contacts[11];
  const user13=contacts[12];

 //dispatching action to add all contacts to the global store
  useEffect(()=>{
    dispatch(addContacts(contacts));
  },[dispatch])
  
  return (
    //rendering right view and left view with required informations
    <div className="flex">
        <div className="w-30">
          <LeftView showConvo={showConvo} setConvo={setConvo}/>
        </div>
        <div className="w-70">
    {/* using switch and Route for routing pupose */}
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
            <Route 
              path='/user2'
              exact
              render={(props)=>{
                return(
                  <RightView
                  {...props}
                  showConvo={showConvo} 
                  setConvo={setConvo} 
                  user={user2}
                  />
                );
              }}            
            />
            <Route 
              path='/user3'
              exact
              render={(props)=>{
                return(
                  <RightView
                  {...props}
                  showConvo={showConvo} 
                  setConvo={setConvo} 
                  user={user3}
                  />
                );
              }}            
            />
            <Route 
              path='/user4'
              exact
              render={(props)=>{
                return(
                  <RightView
                  {...props}
                  showConvo={showConvo} 
                  setConvo={setConvo} 
                  user={user4}
                  />
                );
              }}            
            />
            <Route 
              path='/user5'
              exact
              render={(props)=>{
                return(
                  <RightView
                  {...props}
                  showConvo={showConvo} 
                  setConvo={setConvo} 
                  user={user5}
                  />
                );
              }}            
            />
            <Route 
              path='/user6'
              exact
              render={(props)=>{
                return(
                  <RightView
                  {...props}
                  showConvo={showConvo} 
                  setConvo={setConvo} 
                  user={user6}
                  />
                );
              }}            
            />
            <Route 
              path='/user7'
              exact
              render={(props)=>{
                return(
                  <RightView
                  {...props}
                  showConvo={showConvo} 
                  setConvo={setConvo} 
                  user={user7}
                  />
                );
              }}            
            />
            <Route 
              path='/user8'
              exact
              render={(props)=>{
                return(
                  <RightView
                  {...props}
                  showConvo={showConvo} 
                  setConvo={setConvo} 
                  user={user8}
                  />
                );
              }}            
            />
            <Route 
              path='/user9'
              exact
              render={(props)=>{
                return(
                  <RightView
                  {...props}
                  showConvo={showConvo} 
                  setConvo={setConvo} 
                  user={user9}
                  />
                );
              }}            
            />
            <Route 
              path='/user10'
              exact
              render={(props)=>{
                return(
                  <RightView
                  {...props}
                  showConvo={showConvo} 
                  setConvo={setConvo} 
                  user={user10}
                  />
                );
              }}            
            />
            <Route 
              path='/user11'
              exact
              render={(props)=>{
                return(
                  <RightView
                  {...props}
                  showConvo={showConvo} 
                  setConvo={setConvo} 
                  user={user11}
                  />
                );
              }}            
            />
            <Route 
              path='/user12'
              exact
              render={(props)=>{
                return(
                  <RightView
                  {...props}
                  showConvo={showConvo} 
                  setConvo={setConvo} 
                  user={user12}
                  />
                );
              }}            
            />
            <Route 
              path='/user13'
              exact
              render={(props)=>{
                return(
                  <RightView
                  {...props}
                  showConvo={showConvo} 
                  setConvo={setConvo} 
                  user={user13}
                  />
                );
              }}            
            />
          </Switch>
        </div>  
    </div>
  );
}

//returns the required data from global state
function mapStatetoprops(state){
  return{
    contacts:state.contacts,
    user:state.loggedInUser
  }
}

//using connect to connect this component to global store
const connectedComponent=connect(mapStatetoprops)(App);

export default connectedComponent;
