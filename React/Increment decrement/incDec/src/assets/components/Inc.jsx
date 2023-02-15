
import { useState, useEffect } from 'react'
import './style.css'

export default function IncDec(){
    const [count, setCount] = useState(0); 
    const [label, setLabel] = useState(''); 
    useEffect(() => {
        // Update the document title using the browser API
        if(count>0){
            setLabel('positive');
        }else if(count <0){
            setLabel('negative');
            
        }else if(count===0){
            setLabel('');
        }
    });
    return (<div id='container'>
        <button onClick={()=>{
            if(count<10){
                setCount(count+1)
            }
            }}>+</button>
        <button onClick={()=>{
            if(count>-10){
                setCount(count-1)
            }
            }}>-</button>
        <label id={label}>{count}</label>
    </div>);

}

