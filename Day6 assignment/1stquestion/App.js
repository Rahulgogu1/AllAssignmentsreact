import React, { useState } from 'react';
import child1 from './child1';
 
export var userDetailsContext  = React.createContext(null);


function App(){

  let [userObj, setUserObj] = useState({ name : "Scott", age : 25, email : "scott@gmail.com"});
   
    return (
      <div style={{margin:"10px", border:"2px solid Blue"}}>  
        <h3>This is the Parent Component</h3>    
        <hr/>
        <userDetailsContext.Provider  value={userObj}>
            <child1 />
        </userDetailsContext.Provider>  
          
      </div>
    );   
}

export default App;