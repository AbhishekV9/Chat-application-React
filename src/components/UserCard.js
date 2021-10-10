

function userCard(props){
    const {user}=props;
    const length=user.chats.length-1;
    return(
        // <div className="card">
        //     <div className="card-body">
        //             <Container>
        //             <Row>
        //             <Col sm={2} lg={2}>
        //                 <div className="profile-picture">
        //                     <img src={user.photo} alt="pro" />
        //                 </div>
        //             </Col>
        //             <Col sm={10} lg={10}>
        //                 <div>
        //                     <blockquote className="blockquote mb-0">
        //                     <p>{user.userName}</p>
        //                     <div className="fs-6">                              
        //                         { user.chats[length].message.length<25 ? user.chats[length].message : user.chats[length].message.substring(0,20)+" ..."}
        //                     </div>
        //                     </blockquote>
        //                 </div>
        //             </Col>
        //             </Row>       
        //             </Container>               
        //     </div>
        // </div>
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
                   { user.chats[length].message.length<35 ? user.chats[length].message : user.chats[length].message.substring(0,35)+" ..."}
                </span>                       
            </div>
        </div>
    )

}

export default userCard;