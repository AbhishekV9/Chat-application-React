import UserCard from './UserCard';
import contacts from '../utils/contacts';

function createConvo(props){

    const {setConvo}=props;
    const handleClose= () =>{
        setConvo(false);
    }
    return(
        <div>
            <div className="showContacts">
                <div className="allheader">
                    <span className="showheader">Contacts</span>
                    <span className="closeimg"><img src="https://cdn-icons-png.flaticon.com/512/753/753345.png" alt="close" onClick={handleClose}/></span>
                </div>
                <div className="allconctacs">
                        {contacts.map((user)=>{
                            return <UserCard user={user} key={ user.id} />
                        })}
                </div>
            </div>
        </div>
    )
}

export default createConvo;