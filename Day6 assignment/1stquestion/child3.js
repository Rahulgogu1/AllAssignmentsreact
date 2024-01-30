import axios from 'axios';
import { useContext } from 'react';
import { userDetailsContext } from './App';


function child3(props) {     
    
  var  contextData  = useContext(userDetailsContext);
 
  return <div style={{margin:"10px", border:"2px solid Red"}}>  
          <h3>This is  child3 Component</h3>       
          <hr/>

          <div>
              User Name  :  {contextData.name} <br/>
              User Age  :   {contextData.age} <br/>
              User Email  :  {contextData.email} <br/>
          </div>

        </div>;
}

export default child3;