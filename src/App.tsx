import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import './App.css';
import Home from './page/Home/Home';
import Contact from './page/Contact/Contact';
import Blog from './page/Blog/Blog';
 import Navbar from './components/Navbar'
 import Login from './page/Login/Login';
 import Register from './page/Register/Register';
import Carrinho from './page/Carrinho/Carrinho';
import PrivateRoute from './routes/PrivateRoute';
 
 

function App() {
   return (
     <div className="App"> 
       <BrowserRouter>
       <Navbar/> 
         <Routes>
   
       
         <Route index  path='/' element={<Home/>}  />

          <Route element={<PrivateRoute/>} >
          <Route path="/Contact" element={<Contact/>} />
             <Route path="/Blog" element={<Blog/>} />
          </Route>
 
           
              

             <Route   path='/login' element={<Login/>}  />
             <Route   path='/register' element={<Register/>}  />
             <Route   path='/carrinho' element={<Carrinho/>}  />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
