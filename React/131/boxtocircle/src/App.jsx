import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Box from './assets/Box'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Box/>
    </div>
  )
}

export default App
