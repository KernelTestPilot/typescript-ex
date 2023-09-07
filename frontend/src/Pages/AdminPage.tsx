import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import BookForm from '../Components/BookForm';
import Users from '../Components/Users';
import BookTable from '../Components/BookTable';

function AdminPage(): JSX.Element {
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
          {addBooking && <BookForm />}
          <BookTable/>
        </>
      }/>
      <Route path="/users" element={<Users />}/>
    </Routes>
  )
}

export default AdminPage