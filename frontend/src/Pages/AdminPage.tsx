import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import BookForm from '../Components/BookForm';
import Users from '../Components/Users';
import { PersonInfo } from '../Types/User';
import BookTable from '../Components/BookTable';

interface AdminProps {
  user: PersonInfo
}

function AdminPage({user}: AdminProps): JSX.Element {
  const [addBooking, setAddBooking] = useState<boolean>(false);

  function onAddBookingClick(): void {
    setAddBooking(!addBooking);
  }
    
  return (
    <Routes>
      <Route path="/bookings" element={
        <>
          <h1>Bookings</h1>
          <button onClick={onAddBookingClick}>Add Booking</button>
          {addBooking && <BookForm setAddBooking={setAddBooking}/>}
          <BookTable user={user}/>
        </>
      }/>
      <Route path="/users" element={<Users />}/>
    </Routes>
  )
}

export default AdminPage