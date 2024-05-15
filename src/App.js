
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='gallery' element={<Gallery/>}></Route>
    </Routes>
    
  );
}

export default App;
