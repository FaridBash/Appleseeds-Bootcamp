
import { useState } from "react";
import { useParams } from "react-router-dom"
import productsData from "../data";
import { Link } from "react-router-dom";
export default function ProductDetail(){

    const [products, setProducts]=useState(productsData);
    const params = useParams()
    console.log("products:", products);
    let p=products.filter((e)=>{
        console.log('eid', e.id);
        console.log('pa', Number(params.id));
        if(e.id===Number(params.id)){
            console.log("object", e);
            return e;

        }

    })
        
    console.log('p', p[0]);


    return <div>
        <h1>Product Detail</h1>
        <h3>{p[0].title}</h3>
        <h5>{p[0].size}</h5>
        <img src={p[0].imageUrl} alt="" />
        <h5>{p[0].price}</h5>
        <Link to='/Products'>Back</Link>
    </div>

}