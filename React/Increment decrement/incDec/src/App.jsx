import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import IncDec from './assets/components/Inc'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <IncDec/>
    </div>
  )
}

export default App
