import React from 'react'
import { Route, Routes } from 'react-router'
import AdminUserPage from './AdminUserPage';
import AdminBookPage from './AdminBookPage';
import AdminMainPage from './AdminMainPage';
import Navbar from '../Components/NavBar/Navbar';

function AdminRoutes(): JSX.Element {

  return (
  <Routes>
    <Route path="/" element={
         <>
         <div className='maincontainer'>
         <Navbar/>
         <AdminMainPage/>
         </div>
         </>
    }/>
    <Route path="/bookings" element={
          <>
          <div className='maincontainer'>
          <Navbar/>
          <AdminBookPage/>
          </div>
          </>
    }/>
    <Route path="/users" element={
        <>
        <div className='maincontainer'>
        <Navbar /> 
        <AdminUserPage/>
        </div>
        </>
    } />
  </Routes>
  )
}

export default AdminRoutes