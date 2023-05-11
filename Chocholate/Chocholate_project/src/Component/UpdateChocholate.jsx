import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateChocholate = () => {
    let selectedOptionId = 0;
    const loaddata=useLoaderData();
    const updatedate=(event)=>{
        event.preventDefault();
        const name=event.target.name.value;
        const country=event.target.country.value;
        const photo=event.target.photo.value;
        const catagory=event.target.catagory.value;
        
        const user={
            name,country,photo,catagory
        };
        fetch(`http://localhost:5700/chocholates/${loaddata._id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        }).then(res=>res.json()).then(data=>console.log(data))
    }
    return (
        <div className='w-full '>
            <form onSubmit={updatedate} style={{background:"rgba(20, 20, 20, 0.05)"}} className='p-20'>

            <div className="form-control w-full">
  <label className="label">
    <span className="label-text text-xl font-extrabold">Name</span><br />
  </label>
  <label className="input-group">
    
    <input type="text" placeholder="Cholate Name"defaultValue={loaddata.name} name="name" className="input input-bordered w-full" />
  </label>
</div>
         
         
         
<div className="form-control  w-full">
  <label className="label">
    <span className="label-text text-xl font-extrabold">Country</span>
  </label>
  <label className="input-group">
    
    <input type="text" placeholder="Country Name"defaultValue={loaddata.country}name="country" className="input input-bordered  w-full" />
  </label>
</div>  


<div className="form-control w-full">
  <label className="label">
    <span className="label-text text-xl font-extrabold">Photo</span>
  </label>
  <label className="input-group">
    
    <input type="text" placeholder="Photo URL"defaultValue={loaddata.photo}name="photo" className="input input-bordered w-full" />
  </label>
</div>


<div className=' text-xl font-extrabold my-4 w-full'>
    <div className='my-2'>Catagory</div>

<select className="select select-primary w-full block  "defaultValue={loaddata.catagory}name="catagory">
  <option  defaultValue={selectedOptionId}>Premium</option>
  <option>Forign</option>
  <option>Normal</option>
  <option>Hot Chocholate</option>
  <option>Medium Level</option>
</select></div>
<button className="btn btn-block">Update</button>
 </form>
        </div>
    );
};

export default UpdateChocholate;