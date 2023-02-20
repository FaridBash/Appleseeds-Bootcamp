
import img from '../assets/colored.jpg'
import img2 from '../assets/black-white.jpg'
import { useRef, useState } from 'react';
import './Image.css'

export default function Image(){

    const imageRef=useRef()

    const [src, setSrc]=useState(img);

    const mOver=()=>{
        imageRef.current=img2;
        console.log(imageRef.current);
        setSrc(imageRef.current);
    }
    
    const mOut=()=>{
        imageRef.current=img;
        console.log(imageRef.current);
        setSrc(imageRef.current);
    }

    console.log(imageRef);
    return <img src={src} className="myImage" onMouseOver={mOver} onMouseLeave={mOut} ref={imageRef}/>
}