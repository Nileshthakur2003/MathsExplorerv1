import { useState } from 'react'
import './App.css'
import {ImageBox, MEHeadingText, MainCard, SearchBox } from './CustomComponents'
import {MathComponent} from './MathJaxComponents';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-gradient-to-bl  from-cyan-500 to-blue-500'>
    <MEHeadingText />

    <SearchBox />
    <div className='grid grid-col-* mx-5 mt-10'>
      <MainCard content="Linear Algebra" url="https://images.pexels.com/photos/7794450/pexels-photo-7794450.jpeg?auto=compress&cs=tinysrgb&w=300" >
        <ImageBox />
      </MainCard>
      <MainCard content="Multivariable Calculus"/>
      <MainCard content="Sequences And Series"/>
      <MainCard content="Statistics and Probablity"/>
    </div>
    </div>
    </>
  )
}

export default App
