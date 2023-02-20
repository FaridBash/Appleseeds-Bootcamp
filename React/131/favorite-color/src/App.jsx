import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Color from './components/ColorFav'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Color/>
    </div>
  )
}

export default App
