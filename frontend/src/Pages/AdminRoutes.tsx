import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import AdminUserPage from './AdminUserPage';
import AdminBookPage from './AdminBookPage';
import AdminMainPage from './AdminMainPage';
import Navbar from '../Components/Navbar';
function AdminPage(): JSX.Element {

    
  return (
    
  <Routes>
    <Route path="/" element={
         <>
         <Navbar/>
         <AdminMainPage/>
         </>
    }/>
    <Route path="/bookings" element={
          <>
          <Navbar/>
          <AdminBookPage/>
          </>
    }/>
    <Route path="/users" element={
        <>
        <Navbar /> 
        <AdminUserPage/>
        </>
    } />
  </Routes>
  )
}

export default AdminPage