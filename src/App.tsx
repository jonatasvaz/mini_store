import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import './App.css';
import Home from './page/Home/Home';
import Contact from './page/Contact/Contact';
import Blog from './page/Blog/Blog';
 import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
           
         <Routes>
   
             <Route index  path='/' element={<Home/>}  />
             <Route path="/Contact" element={<Contact/>} />
             <Route path="/Blog" element={<Blog/>} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
