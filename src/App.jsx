import { useState } from 'react'
import './App.css'
import React from 'react';
import {ImageBox, MEHeadingText, MainCard, SearchBox } from './CustomComponents'
import {MathComponent} from './Pages/core/MathJaxComponents';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from './Pages/About';
import LinearAlgebra from './Pages/core/linearAlgebra';
import LinearAlgebraSLE from './Pages/core/linearlib/sle';
import MultiCalc from './Pages/core/multicalc';
import SeqSeries from './Pages/core/seqseries';
import StatProb from './Pages/core/statprob';
import HomeCode from './home';
import Grapher from './Pages/grapher/grapher';
import LoginPage from './Pages/user/login';
import RegisterPage from './Pages/user/register';
import ForgotPasswordPage from './Pages/user/ForgotPassword';



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeCode/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/core/linearAlgebra' element={<LinearAlgebra/>}></Route>
      <Route path='/core/multivariable-calc' element={<MultiCalc/>}></Route>
      <Route path='/core/sequence-series' element={<SeqSeries/>}></Route>
      <Route path='/core/stat-probablity' element={<StatProb/>}></Route>
      <Route path='/core/linearAlgebra/sle' element={<LinearAlgebraSLE/>}></Route>
      <Route path='/grapher/' element={<Grapher/>}></Route>
      <Route path='/login/' element={<LoginPage/>}></Route>
      <Route path='/register/' element={<RegisterPage/>}></Route>
      <Route path='/recoverAccount/' element={<ForgotPasswordPage/>}></Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
