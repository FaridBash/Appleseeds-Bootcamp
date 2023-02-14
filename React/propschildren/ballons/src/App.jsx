import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MotherComp from './components/Mother'
import Balloon from './components/Ballon'
import ChildComp from './components/ChildComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>HELLO</h1>
    </div>
  )
}

export default App
