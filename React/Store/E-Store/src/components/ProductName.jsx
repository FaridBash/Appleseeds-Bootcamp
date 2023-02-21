
import { Link } from "react-router-dom"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
export default function ProductName(props){

    // path="/users/:userId" element={<Users />}


    return <Link to={'/products'} className="title">{props.name}</Link>
}