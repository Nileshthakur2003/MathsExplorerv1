import { useState } from 'react'
import './App.css'
import {ImageBox, MEHeadingText, MainCard, SearchBox } from './CustomComponents'
import {MathComponent} from './MathJaxComponents';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from './Pages/About';
import linearAlgebra from './Pages/core/linearAlgebra';
import multiCalc from './Pages/core/multicalc';
import seqSeries from './Pages/core/seqseries';
import statProb from './Pages/core/statprob';
import HomeCode from './home';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeCode/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/linearAlgebra' element={<linearAlgebra/>}></Route>
      <Route path='/multivariable-calc' element={<multiCalc/>}></Route>
      <Route path='/sequence-series' element={<seqSeries/>}></Route>
      <Route path='/stat-probablity' element={<statProb/>}></Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
