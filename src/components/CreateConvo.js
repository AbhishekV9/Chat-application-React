import UserCard from './UserCard';
import contacts from '../utils/contacts';

function createConvo(props){

     //getting information from props
    const {setConvo}=props;

    //function triggered when you click on close icon of all contacts pop up
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
                {/* rendering usercard for all the contacts  */}
                <div className="allconctacs" onClick={handleClose}>
                        {contacts.map((user)=>{
                            return <UserCard user={user} key={ user.id} />
                        })}
                </div>
            </div>
        </div>
    )
}

export default createConvo;