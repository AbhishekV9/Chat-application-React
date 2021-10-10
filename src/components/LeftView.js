import { connect } from 'react-redux';

import UserCard from './UserCard';

function LeftView(props){
   
    const {contacts}=props;
    console.log("leftview props",contacts);
    return(
        <div>
            <div>
                <h3>Personal information</h3>
            </div>
            <div>
                <h3>Searchbar</h3>
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