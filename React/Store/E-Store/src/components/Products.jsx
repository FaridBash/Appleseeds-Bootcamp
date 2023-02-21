
import { useEffect, useState } from "react"
import productsData from "../data"
import ProductName from "./ProductName"
import { Link } from "react-router-dom"
import './Products.css'
export default function Products(){

    const [product, setProduct]=useState(productsData)

    
    // useEffect(()=>{
    //     setProduct(productsData);
    //     console.log(product);
    // })


    return <div>
        <h1>Products</h1>
        <div className="product-holder">
            {product.map((e)=>{return <Link to={"/products/"+e.id}>{e.title} </Link>})}
        </div>
    </div>
}