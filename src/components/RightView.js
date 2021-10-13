
import CreateConvo from './CreateConvo'

function RightView(props){
    const { showConvo,setConvo,user}=props;
    console.log("props",user);
    return(
      <div>
           {user.id===0 ? <div className="user0">
              <div>
                { showConvo && <CreateConvo setConvo={setConvo} /> }
              </div>
           </div>: <div>
             <h1>Byeeeeeeee</h1>
             
            </div>}
            
      </div>
    )
}

export default RightView;