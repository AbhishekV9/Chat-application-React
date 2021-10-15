import { connect } from 'react-redux';
import { useState } from 'react';

import CreateConvo from './CreateConvo'
import { sendMessage } from '../action';

function RightView(props){
    //getting information from props
    const { showConvo,setConvo,user,loggedInUser,dispatch}=props;

    //creating local state message from react hook useState
    const [message,setMessage] = useState("");
    
    //when text for message changes , this function is saves the text in local state by using setMessage
    const handleChange=(e)=>{
      setMessage(e.target.value);
    }

    //this function is responsible for getting time in 12 hr format
    function formatAMPM(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }

    //function called when we click on  send message 
    const handleSubmit=()=>{
      //getting time
      const timestamps=formatAMPM(new Date());

      //dispatching action to save the message in global store
      dispatch(sendMessage(user,message,timestamps));

      //setting message value as empty again
      setMessage("");
    }
    return(
      <div className="rightSide">
           {user.id===0 ? 
           <div className="user0">
             {/* createConvo is the all contacts pop up which you after clicking on create conversation icon */}
              <div>
                { showConvo && <CreateConvo setConvo={setConvo} /> }
              </div>
           </div>: 
           <div className="otherUsers">
              <div>
                <div className="chat_header">
                    <span  className="current_user"> <img src= {user.photo} alt="profile"/></span>
                    <span className="current_user" >{user.userName}</span>
                </div>
                <div className="complete_convo">
                     {user.chats.length===0 ? null :
                      <div className="messages">
                          {user.chats.map((chat,index)=>{
                            return( 
                            <div className="tip" key={index}>
                              {chat.sender=== "self" ?
                                <div className="chatbox">
                                  <div className="flex b1">     
                                    <div className="mes" ><p>{chat.message}</p></div>                              
                                    <div className="time"><p>{chat.timestamps}</p></div>                                   
                                  </div>
                                  <span className="current_user fd"><img src={loggedInUser.img} alt="my pic"/></span>
                                </div>
                              :
                                <div>
                                  <div className="chatboxx">
                                  <span className="current_user fd"><img src={user.photo} alt="user pic"/></span>
                                    <div className="flex b2">     
                                      <div className="mes" ><p>{chat.message}</p></div>                              
                                      <div className="time"><p>{chat.timestamps}</p></div>                                   
                                    </div>
                                    
                                  </div>
                                </div>                             
                              }
                                
                            </div>
                            )
                          })}
                      </div>
                      }
                </div>
              </div>
               {/* createConvo is the all contacts pop up which you after clicking on create conversation icon */}
              <div>
                { showConvo && <CreateConvo setConvo={setConvo} /> }
              </div>
              <div className="sendbox">
                    <div className="flex">
                      <div className="ipbox"><input placeholder="type message ... " onChange={handleChange} value={message}/></div>
                      <div className="sendimg"><img src="https://cdn-icons-png.flaticon.com/512/3814/3814305.png" alt="send" onClick={handleSubmit}/></div>
                    </div>
              </div>
            </div>}           
      </div>
    )
}

//returns the required data from global state
function mapStatetoprops(state){
  return{
    loggedInUser:state.loggedInUser
  }
}

//using connect to connect this component to global store
const connectedComponent=connect(mapStatetoprops)(RightView);

export default connectedComponent;