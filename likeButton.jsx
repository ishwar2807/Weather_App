import { useState } from "react";
 

export default function LikeButton(){

    const [isLike,setIsLike]=useState(false);
    const [count,setCount]=useState(0);

    const lkeBtn= ()=>{
        // const newLike=!isLike;
        setIsLike(!isLike);
        setCount(count+1);
    }
   
    
    let styles={
        color:"red",
    }
    return (
        <>
        <b>count={count}</b>
        <p onClick={lkeBtn}>
            {isLike ?
            <i className="fa-solid fa-heart" style={styles}></i>:
            <i className="fa-regular fa-heart"></i>}
       
        </p>
        </>
    )
}