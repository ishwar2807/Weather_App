import "./search.css";
import React,{ useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default function SearchBox({updateinfo}){

    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_Key="6029c2e0279071621aeb12dd5b2b37ec";

    


   let getWeatherInfo=async()=>{
    try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_Key}`);
        let jsonResponse=await response.json();
        let Result={
           city:city,
           temp: jsonResponse.main.temp,
           tempMin: jsonResponse.main.temp_min,
           tempMax: jsonResponse.main.temp_max,
           humidity: jsonResponse.main.humidity,
           feelsLike: jsonResponse.main.feelsLike,
           weather: jsonResponse.weather[0].description,
           
        }
       //  console.log(Result);
        return Result;
    }
    catch(err){
    throw(err);

    };
       
   };


function handleState(event){
    setCity(event.target.value);
    // console.log(event)
}
let handleSubmit=async(event)=>{
    try{
        event.preventDefault();
        console.log(city);
        setCity("");
         let newInfo=await getWeatherInfo();
        updateinfo(newInfo);
    }catch(err){
setError(true);
    }

}

    return(
        
        <div class="search" >
        {/* <h3>Search for The Weather</h3> */}
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="filled" value={city} onChange={handleState} style={{backgroundColor:"white"}}  required/> 
        {/* <TextField id="city" label="City Name" variant="filled" /> */}
        <br></br><br></br>
        <Button variant="contained" type="submit" class="btn" >Search</Button>
        {error && <p style={{color:"red"}}>no such place exist!</p>}
        </form>
    </div>
        
    )

}