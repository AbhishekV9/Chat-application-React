import { Link } from "react-router-dom";

function userCard(props){
    const {user}=props;
    const length=user.chats.length-1;
    const link=`/user${user.id}`
    return(
       <Link to={link} style={{ textDecoration: 'none' }} >
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

export default userCard;