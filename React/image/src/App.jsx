import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyImage from './components/image'
import img1 from './assets/img/andrea-de-santis-4pxzuQOOGVU-unsplash.jpg';
import img2 from './assets/img/roozbeh-eslami-tF4O4Z0OcG8-unsplash.jpg';
import img3 from './assets/img/samsung-uk-hBFyqMmcRS4-unsplash.jpg';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyImage 
      srcLink={img1}
      desc='My Image 1'
      MyH1='Im here'
      p='lorem'
      ALinktxt='google.com'
      Atxt='Share'/>
      <MyImage 
      srcLink={img2}
      desc='My Image 1'
      MyH1='Im here2'
      p='lorem2'
      ALinktxt='google.com'
      Atxt='Share'/>
      <MyImage 
      srcLink={img3}
      desc='My Image 1'
      MyH1='Im here3'
      p='lorem3'
      ALinktxt='google.com'
      Atxt='Share'/>
    </div>
  )
}

export default App
