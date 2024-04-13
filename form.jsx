import { useState } from "react";

 export default function Forms(){
     let [formData,setFormData]=useState({
        fullname:"",
        name:"",
 });

  let handleInputData=(event)=>{
//   let fieldName=event.target.name;
//   let fieldValue=event.target.value;
//   console.log(fieldValue);


  setFormData((currData)=>{
    // currData[fieldName]=fieldValue;
    return{
        // ...currData,[fieldName]:fieldValue,
       ...currData,[event.target.name]:event.target.value,
    }
  })
  };

    let handleSubmit=(event)=>{
    event.preventDefault();

    console.log(formData);

    setFormData({
        fullname:"",
        name:"", 
    })
    }


    return (
    <>
    <form onSubmit={handleSubmit}>
    <label htmlFor="fullname">fullName:</label>
    <input placeholder="enter full name" type="text" value={formData.fullname}  onChange={handleInputData} id="fullname" name="fullname"></input>
    <br></br>
    <label htmlFor="name">name:</label>
    <input placeholder="enter name" type="text" value={formData.name}  onChange={handleInputData} id="name" name="name"></input>
   <br></br>
    <button >submit</button>
    </form>
    </>
    )   
 }