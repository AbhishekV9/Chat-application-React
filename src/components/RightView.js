
import CreateConvo from './CreateConvo'

function RightView(props){
    const { showConvo,setConvo,user}=props;
    console.log("props",user);
    return(
      <div>
           {user.id===0 ? <div>
              <h1>Hiiiiii</h1>
           </div>: <div>
             <h1>Byeeeeeeee</h1>
             
            </div>}
            <div>
                { showConvo && <CreateConvo setConvo={setConvo} /> }
            </div>
      </div>
    )
}

export default RightView;