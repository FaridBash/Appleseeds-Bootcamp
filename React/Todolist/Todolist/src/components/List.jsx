import { useState } from 'react'
import './List.css'


export default function List({deleteHandler, item, done, vHandler}){

    const [sign, setSign]=useState("x");

    return <div id='todo-list'>
        <label htmlFor=""></label>
        <p><label htmlFor="" onClick={()=>{ sign==='x' ? setSign('v'):setSign('x')}}>{sign}{" - "}</label> {item}</p>
        <button onClick={()=>{deleteHandler(item)}}>Delete</button>
    </div>

}