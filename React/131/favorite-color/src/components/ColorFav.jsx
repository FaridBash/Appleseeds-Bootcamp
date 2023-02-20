import { useEffect, useState } from "react";



export default function Color(){

    const [favoriteColor, setFavoriteColor]=useState("blue");

    useEffect(()=>{
        setTimeout(()=>{
            setFavoriteColor("red")
        },1000)
    },[]);

    return <div>
        <h1>My fovorite color is {favoriteColor}</h1>
        <div id="my-div"></div>
    </div>

} 