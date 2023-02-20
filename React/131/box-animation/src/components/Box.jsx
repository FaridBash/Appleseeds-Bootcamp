
import { useEffect, useState } from 'react'
import './Box.css'

export default function Box(props){

    const[startClass, setStartClass]=useState('box')
    const myStyle={
        width:props.height,
        height: props.height,
        
    }


    useEffect(()=>{
        setTimeout(()=>{
            setStartClass("hide");
        },4000)
    });


    return <div className={startClass} style={myStyle}>

    </div>


}