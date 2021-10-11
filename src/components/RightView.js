
import CreateConvo from './CreateConvo'

function RightView(props){
    const { showConvo,setConvo}=props;
    console.log(props);
    return(
      <div>
           <div>right</div>
            <div>
                { showConvo && <CreateConvo setConvo={setConvo} /> }
            </div>
      </div>
    )
}

export default RightView;