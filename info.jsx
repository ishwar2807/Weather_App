import { useState } from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';



export default function Info({info}){
  
   let cold_URL="https://images.pexels.com/photos/9940569/pexels-photo-9940569.jpeg?auto=compress&cs=tinysrgb&w=600";

   let hot_URL="https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    
   let rainy_URL="https://img.freepik.com/free-photo/background-rain-drops-close-up_23-2148900860.jpg?t=st=1712920168~exp=1712923768~hmac=bbb3176ca787ba14acd1deb9678c6e1d51cd547119242e6dc6b6b69d0e5a7a15&w=900";

    return (
        <>
        {/* <h2>Weather Info-{Weatherinfo.weather}</h2> */}
        
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?rainy_URL:info.temp>295?hot_URL: cold_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}{
          info.humidity>80?(<ThunderstormIcon/>):info.temp>295?(<WbSunnyIcon/>): (<AcUnitIcon/>)
        }
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <div> city:{info.city}</div>
        <div>temp:{info.temp}</div>
       <div> tempMin:{ info.tempMin}&deg;</div>
        <div>tempMax: {info.tempMax}&deg;</div>
       <div> humidity:{info.humidity}</div>
        <div>feelsLike: {info.feelsLike}&deg;</div>
       <div> weather:{info.weather}&deg;</div>
       <hr></hr>
       <p><b>The  Weather Can Be Describes As {info.weather} & Feels Like {info.feelsLike}&deg;c</b></p>
        </Typography>
      </CardContent>
    </Card> 
        </>
    )
    };