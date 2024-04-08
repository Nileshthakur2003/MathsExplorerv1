import { useState } from 'react'
import './App.css'
import {MEHeadingText } from './CustomComponents'
import {MathComponent} from './MathJaxComponents';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MEHeadingText />
    </>
  )
}

export default App
