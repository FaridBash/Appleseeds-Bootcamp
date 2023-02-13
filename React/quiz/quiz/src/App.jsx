import { useState } from 'react'
import './App.css'
import Box from './components/OutsideBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Box/>
    </div>
  )
}

export default App
