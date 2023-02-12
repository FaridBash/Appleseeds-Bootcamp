import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HelloWorld from './cmponents/HelloWorld'
import Plus from './cmponents/plus'
import StringLength from './cmponents/Length'

// import HelloWorld from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App"> 
      <h1>AppleSeeds React App</h1>
      <HelloWorld />
    <Plus />
    <StringLength />
    </div>
  )
}


export default App
