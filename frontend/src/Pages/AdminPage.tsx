import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import BookingThead from '../Components/BookingThead'
import BookingTbody from '../Components/BookingTbody'
import Calendar from '../Services/Calendar';
import BookForm from '../Components/BookForm';

function AdminPage(): JSX.Element {
  const [addBooking, setAddBooking] = useState<boolean>(false);
  const calendar = new Calendar();
  //hämtar veckans datum + dagar som objekt
  const weekdays = calendar.getWeek();

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
          <table>
            <BookingThead weekdays={weekdays.map(dayObj => dayObj.weekdays)} dateString={weekdays.map(dayObj => dayObj.dateString)} />
            <BookingTbody weekdays={weekdays.map(dayObj => dayObj.dateString)} />
          </table>
        </>
      }/>
      <Route path="/users" element={<p>Users</p>}/>
    </Routes>
  )
}

export default AdminPage