import React  from 'react'
import BookingThead from '../Components/BookingThead';
import BookingTbody from '../Components/BookingTbody';
import Calendar from '../Services/Calendar';

function BookingPage() {
    const calendar = new Calendar();
    //hämtar veckans datum + dagar som objekt
    const weekdays = calendar.getWeek();
    
  return (
    <div><h2>BookingPage</h2>
        <table>
        <BookingThead weekdays={weekdays.map(dayObj => dayObj.weekdays)} dateString={weekdays.map(dayObj => dayObj.dateString)} />
        <BookingTbody weekdays={weekdays.map(dayObj => dayObj.dateString)} />
        </table>
    </div>
  )
}

export default BookingPage