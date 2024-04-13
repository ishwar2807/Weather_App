   import { useState  } from "react"
   import SearchBox from "./search.jsx"
   import Info from "./info.jsx"
 
 export default function WeatherApp(){

let [weatherinfo,setWeatherInfo]=useState({
  
        city:"pune",
        temp: 25.05 ,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity:47 ,
        feelsLike: "24.84",
        weather:"haze",
});
    let updateinfo=(newInfo)=>{
      setWeatherInfo(newInfo);
    }
   

    return(
        <>
        <h2 style={{Color:"white"}}>Weather App By Deltas</h2>
         <SearchBox updateinfo={updateinfo}/>
         <Info info={weatherinfo}/>
        </>
    )
 }