import { connect } from 'react-redux';

import CreateConvo from './CreateConvo'

function RightView(props){
    const { showConvo,setConvo,user,loggedInUser}=props;
    console.log("propsssdsds",props);
    return(
      <div>
           {user.id===0 ? 
           <div className="user0">
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
                <div>
                     {user.chats.length===0 ? null :
                      <div className="messages">
                          {user.chats.map((chat)=>{
                            return( 
                            <div className="tip">
                              {chat.sender=== "self" ?
                                <div className="chatbox">
                                  <span className="flex b1">     
                                    <div className="mes" ><p>{chat.message}</p></div>                              
                                    <div className="time"><p>{chat.timestamps}</p></div>                                   
                                  </span>
                                  <span className="current_user fd"><img src={loggedInUser.img} alt="my pic"/></span>
                                </div>
                              :
                                <div>
                                  {/* <span className="current_user"><img src={user.photo} alt="user pic"/></span>
                                  <span className="b1">
                                    <span className="mes">{chat.message}</span>
                                    <span className="time">{chat.timestamps}</span>
                                  </span> */}
                                  <div className="chatboxx">
                                  <span className="current_user fd"><img src={user.photo} alt="user pic"/></span>
                                    <span className="flex b2">     
                                      <div className="mes" ><p>{chat.message}</p></div>                              
                                      <div className="time"><p>{chat.timestamps}</p></div>                                   
                                    </span>
                                    
                                  </div>
                                </div>                             
                              }
                                
                            </div>
                            )
                          })}
                      </div>
                      }
                    <div className="chatbox">

                    </div>
                </div>
              </div>
              <div>
                { showConvo && <CreateConvo setConvo={setConvo} /> }
              </div>
            </div>}           
      </div>
    )
}

function mapStatetoprops(state){
  return{
    loggedInUser:state.loggedInUser
  }
}

const connectedComponent=connect(mapStatetoprops)(RightView);

export default connectedComponent;