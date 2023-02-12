import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import HelloWorld from './cmponents/HelloWorld'
import Plus from './cmponents/plus'
import StringLength from './cmponents/Length'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <HelloWorld />
    <Plus />
    <StringLength />
  </React.StrictMode>,
)
