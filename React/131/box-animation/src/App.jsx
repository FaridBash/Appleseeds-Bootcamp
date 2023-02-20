import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Box from './components/Box'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Box height={"15rem"}  />
    </div>
  )
}

export default App
