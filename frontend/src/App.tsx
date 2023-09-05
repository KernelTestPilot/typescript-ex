import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import BookingPage from './Pages/BookingPage';
import AdminPage from './Pages/AdminPage';
import "./stylesheet/main.css";
import Banner from './Components/Banner';
function App() {
  return (

   <BrowserRouter>
   <div className='maincontainer' >
    <Routes>
      <Route index element={<LandingPage />}/>
      <Route path="/book" element={<BookingPage />}/>
      <Route path="/admin" element={<AdminPage />}/>
    </Routes>
    <div className='footer'> test</div>
    </div>
   </BrowserRouter>
  );
}

export default App;
