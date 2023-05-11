import React from 'react';
import { Link } from 'react-router-dom';

const Tbody = (props) => {
    const propsdata=props.indexdata;
    console.log(propsdata);
    const handlefunction=(_id)=>{
        const datafilter=props.data.filter(index=>_id!==index._id);
        props.setData(datafilter);
        fetch(`http://localhost:5700/chocholates/${_id}`,{
            method:"DELETE"
        }).then(res=>res.json()).then(data=>{console.log(data);
           
        
        })
    }
   
    return (
        <tr>
         
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={propsdata.photo} alt="chocholate" />
              </div>
            </div> </div> </td>
            <td>
              <div className="font-bold">{propsdata.name}</div>
              </td>
      
         
       
        <td>
       {propsdata.country}
         
        </td>
        <td>{propsdata.catagory}</td>
        <th>
          <button className="btn btn-primary btn-xs"><Link to={`/UpdateCholate/${propsdata._id}`} className='text-decoration-none '>Edit</Link> </button>
          <button className="btn btn-primary btn-xs ms-3"onClick={()=>handlefunction(propsdata._id)}>Delete</button>
        </th>


         
    
      </tr>)
    
};

export default Tbody;