import React, { useState } from 'react'
import BookingThead from './BookingThead'
import BookingTbody from './BookingTbody'
import Calendar from '../Services/Calendar';
import { PersonInfo } from '../Types/User';

export default function BookTable() {
    const [offset, setOffset] = useState<number>(0);
    const [calendar, setCalendar] = useState<Calendar>(new Calendar(offset));

     //hämtar veckans datum + dagar som objekt
    const weekdays = calendar.getWeek();

    function updateOffset(time: number): void {
        setOffset(offset + time);
        setCalendar(new Calendar(offset + time));
      }

    function nextWeekClick(): void {
        updateOffset(calendar.daysToMilliseconds(7));
      }
      
      function previousWeekClick(): void {
        updateOffset(calendar.daysToMilliseconds(-7));
      }
    
      function resetOffsetClick(): void {
        setOffset(0);
        setCalendar(new Calendar(0));
      }
  return (
    <>
      <button onClick={previousWeekClick}>Föregående vecka</button>
      <button onClick={resetOffsetClick}>Nuvarande vecka</button>
      <button onClick={nextWeekClick}>Nästa vecka</button>
      <table>
        <BookingThead weekdays={weekdays.map(dayObj => dayObj.weekdays)} dateString={weekdays.map(dayObj => dayObj.dateString)} />
        <BookingTbody weekdays={weekdays.map(dayObj => dayObj.dateString)} />
      </table>
    </>
  )
}
