import './Btn.css'
import React, {useState} from 'react';

export default function Btn(props){
    // let count=0;
   const [num, setNum] = useState(0);
    return (<div id='btn'>
        <button id='clickBtn' onClick={() => setNum((num) => num + 1)} >Click</button>
        <label>{num}</label>
    </div>)
}