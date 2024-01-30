import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function AjaxDemo1() {   

   const [dataArray, setDataArray] = useState([]);

  function getDataButton_click() {

      let url = "https://reqres.in/api/users";
      axios.get(url).then( (res) => 
      {
        console.log(res.data.data);
        setDataArray(res.data.data);
      });
  }

  let resultArray = dataArray.map(item => 
    { 
     
             
      return <tr>
          <td>{item.id}</td>
          <td>{item.email}</td>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <img
            src={item.avatar}
            alt=""
            style={{ width: "50px", borderRadius: "50%" }}
          />
      </tr>;
    });


  return (
    <div style={{"padding":"5px"}}> 

      <h3>AJAX Programming in React JS using Axios Package</h3>
      <hr/>


      <input type="button" onClick={getDataButton_click} 
               value="Get Data" />

      <hr/>

      <table  border="2" cellSpacing="0" width="500">
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First_Name</th>
            <th>Last_Name</th>
            <th>Avatar</th>
          </tr>
          {resultArray} 
      </table>         

    </div>
  );
}

export default AjaxDemo1;