import React from "react"
import NavLink from "react"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import './Header.css'
export default function Header(){

    return <div id="header">
    <Link to='/' className="link">Home</Link>
    <Link to='/Products' className="link">Products</Link>
    <Outlet/>
    </div>

}