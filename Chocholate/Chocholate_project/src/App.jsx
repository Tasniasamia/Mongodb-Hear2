import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tbody from './Component/Tbody/Tbody';

function App() {
  // const[delitee,setDelete]=useState([]);
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5700/chocholates')
    .then(res=>res.json())
    .then(data=>{console.log(data);
      setData(data);
    
    })
  },[])

  return (
    <div className="overflow-x-auto w-full">
    <table className="table w-full">
      {/* head */}
      <thead>
        <tr>
          {/* <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th> */}
          <th>Photo</th>
          <th>Name</th>
          <th>Country</th>
          <th>Catagory</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
     {
      data.map(index=><Tbody key={index._id} indexdata={index} data={data} setData={setData}></Tbody>)
     }
       
      </tbody>
      {/* foot */}
      <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </tfoot>
      
    </table>
  </div>
  )
}

export default App
