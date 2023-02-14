import { text } from 'figlet'
import { useState } from 'react'
import './App.css'
import Btn from './components/Button'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Btn txt='Important'> </Btn>
      <Btn txt='Not Important'/>
    </div>
  )
}

export default App
