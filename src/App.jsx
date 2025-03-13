import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Pages/About';
import LinearAlgebra from './Pages/core/linearAlgebra';
import LinearAlgebraSLE from './Pages/core/linearlib/sle';
import MultiCalc from './Pages/core/multicalc';
import SeqSeries from './Pages/core/seqseries';
import StatProb from './Pages/core/statprob';
import HomeCode from './home';
import Grapher from './Pages/grapher/grapher';
import Core from './Pages/core/core';
import Contributions from './Pages/core/contributions';
import SLELinksAndReferences from './Pages/core/linearlib/sleComponents/BooksAndRefs';
import './App.css';

function App() {
  return (
    <>
    <div className="container mx-auto px-4">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeCode/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/core' element={<Core/>}></Route>
          <Route path='/contributions/' element={<Contributions/>}></Route>
          <Route path='/core/linearAlgebra' element={<LinearAlgebra/>}></Route>
          <Route path='/core/multivariableCalc' element={<MultiCalc/>}></Route>
          <Route path='/core/sequenceSeries' element={<SeqSeries/>}></Route>
          <Route path='/core/statProbablity' element={<StatProb/>}></Route>
          <Route path='/core/linearAlgebra/sle' element={<LinearAlgebraSLE/>}></Route>
          <Route path='/grapher/' element={<Grapher/>}></Route>
          <Route path='/core/linearAlgebra/sle' element={<LinearAlgebraSLE/>}></Route>
          <Route path='/core/linearAlgebra/sle/booksrefs' element={<SLELinksAndReferences/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
