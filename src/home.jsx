import { useState } from 'react'
import './App.css'
import {ImageBox, MEHeadingText, MainCard, SearchBox } from './CustomComponents'
import {MathComponent} from './MathJaxComponents';
function HomeCode() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className=''>
    <MEHeadingText />

    <SearchBox id="query" />
    <div className='grid grid-rows-2 grid-flow-col gap-10 mt-10'>
      <MainCard content="Linear Algebra" url="/core/linear-algebra"/>
      <MainCard content="Multivariable Calculus" url="/core/multivariable-calc" />
      <MainCard content="Sequences And Series" url="/core/sequence-series"/>
      <MainCard content="Statistics and Probablity" url="/core/stat-probablity"/>
      <MainCard content="Linear Algebra"/>
      <MainCard content="Multivariable Calculus"/>
      <MainCard content="Sequences And Series"/>
      <MainCard content="Statistics and Probablity"/>
    </div>
    </div>
    </>
  )
}

export default HomeCode
