import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Number from './Number'
import MyNum  from './NumComp'
import Btn from './Button'

function App() {
  const [count, setCount] = useState(0)
  let Number=0;
  return (
    <div className="App">
      <h1>Hello</h1>
      <Number/>
      <MyNum />
      <Btn/>
    </div>
  )
}

export default App
