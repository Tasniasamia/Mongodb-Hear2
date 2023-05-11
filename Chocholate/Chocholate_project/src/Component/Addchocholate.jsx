import React from 'react';

const Addchocholate = () => {
    let selectedOptionId = 0;
    const handlefunction=(event)=>{
        event.preventDefault();
        const name=event.target.name.value;
        const country=event.target.country.value;
        const photo=event.target.photo.value;
        const catagory=event.target.catagory.value;
        
        const user={
            name,country,photo,catagory
        };
        console.log(user);
        fetch('http://localhost:5700/chocholates',{
      method:"POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            alert("Your added Successfully")
        }
      console.log(data);})
            
       
    }
    return (
        <div className='w-full '>
            <form onSubmit={handlefunction} style={{background:"rgba(20, 20, 20, 0.05)"}} className='p-20'>

            <div className="form-control w-full">
  <label className="label">
    <span className="label-text text-xl font-extrabold">Name</span><br />
  </label>
  <label className="input-group">
    
    <input type="text" placeholder="Cholate Name"name="name" className="input input-bordered w-full" />
  </label>
</div>
         
         
         
<div className="form-control  w-full">
  <label className="label">
    <span className="label-text text-xl font-extrabold">Country</span>
  </label>
  <label className="input-group">
    
    <input type="text" placeholder="Country Name"name="country"className="input input-bordered  w-full" />
  </label>
</div>  


<div className="form-control w-full">
  <label className="label">
    <span className="label-text text-xl font-extrabold">Photo</span>
  </label>
  <label className="input-group">
    
    <input type="text" placeholder="Photo URL"name="photo" className="input input-bordered w-full" />
  </label>
</div>


<div className=' text-xl font-extrabold my-4 w-full'>
    <div className='my-2'>Catagory</div>

<select className="select select-primary w-full block  "name="catagory">
  <option  defaultValue={selectedOptionId}>Premium</option>
  <option>Forign</option>
  <option>Normal</option>
  <option>Hot Chocholate</option>
  <option>Medium Level</option>
</select></div>
<button className="btn btn-block">Save</button>
 </form>
        </div>
    );
};

export default Addchocholate;