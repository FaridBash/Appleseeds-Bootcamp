import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Home from './components/HomePage'
import Products from './components/Products'
import Header from './components/Header'
import ProductDetail from './components/ProductDetail'
import './App.css'



const route=createBrowserRouter([
  {
    path:'/',
    element:<Header/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/Products',
        element: <Products/>,
      },
      {
        path:'/Products/:id',
        element:<ProductDetail/>
      }

    ]
    
  },
  
  
])

function App() {

  return (
    <div className="App">
     <RouterProvider router={route}/>
    </div>
  )
}

export default App
