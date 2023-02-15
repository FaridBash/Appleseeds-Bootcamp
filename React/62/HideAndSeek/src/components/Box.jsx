import { useState } from 'react'
import './Box.css'



export default function Box(){

    const [active, isActive]=useState(true);
    

    if(active){
        return (<div id='container'>
        <button onClick={()=>isActive(!active)} >Show/Hide</button>  
        <div id='' >
        </div>
        
    </div>)
    }

    else return (<div id='container'>
        <button onClick={()=>isActive(!active)} >Show/Hide</button>  
        <div id='box' >
        </div>
        
    </div>);
}


