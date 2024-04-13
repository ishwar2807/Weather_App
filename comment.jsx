import { useState } from "react";

export default function Comment(){
 let [formData,setformData]=useState({

    username:"",
    remarks:"",
    rating:0,
 });

let commentbox=(event)=>{
    setformData((currdata)=>{
        return {
...currdata,[event.target.name]:event.target.value,
        }
    })
};
let handleSubmit=(event)=>{
event.preventDefault();


setformData({
    
    username:"",
    remarks:"",
    rating:0,
})
}

    return (
        <>
        <h3>give a comment!</h3>
        <form  onSubmit={handleSubmit}>
            <label htmlFor="username"></label> 
           <input placeholder="enter a user name" type="text" value={formData.username} onChange={commentbox} name="username" id="username"/>
            <br></br>
           <label htmlFor="remarks"></label> 
           <textarea  placeholder="add remarks" type="text" value={formData.remarks}  onChange={commentbox} name="remarks" id="remarks"/>
       <br></br>
           <label htmlFor="rating"></label> 
           <input placeholder="enter a rating" type="number" min={1} max={5} value={formData.rating}  onChange={commentbox} name="rating" id="rating"/>
          <br></br>
           <button >Add Comment</button>
       </form>        
        
        </>
    )
}