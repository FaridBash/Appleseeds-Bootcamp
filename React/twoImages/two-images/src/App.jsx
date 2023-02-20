import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Image from './components/Image'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Image/>
    </div>
  )
}

export default App
