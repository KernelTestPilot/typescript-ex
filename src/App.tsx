import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import BookingPage from './Pages/BookingPage';
import AdminPage from './Pages/AdminPage';
import "./stylesheet/main.css";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route index element={<LandingPage />}/>
      <Route path="/book" element={<BookingPage />}/>
      <Route path="/admin" element={<AdminPage />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
