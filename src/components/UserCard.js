

function userCard(props){
    const {user}=props;
    const length=user.chats.length-1;
    return(
        <div className="flex w-100 h-60px userCard p3">
            <div className="w-20 p1">
                <div className="profile-picture">
                     <img src={user.photo} alt="pro" /> 
                </div>
            </div>
            <div className="w-80 p">
                <div className="username">
                    {user.userName}
                </div>   
                <span className="message">
                    {length=== -1 ? null : 
                    user.chats[length].message.length<35 ? user.chats[length].message : user.chats[length].message.substring(0,35)+" ..."}
                </span>                       
            </div>
        </div>
    )

}

export default userCard;