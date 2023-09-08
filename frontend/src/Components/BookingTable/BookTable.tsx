import React, { useState } from 'react'
import BookingThead from './BookingThead'
import BookingTbody from './BookingTbody'
import Calendar from '../../Services/Calendar';
import WeekButtons from './WeekButtons';

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
      <div className='Table-Nav'>
      <WeekButtons previousWeekClick = {previousWeekClick} resetOffsetClick= {resetOffsetClick} nextWeekClick = {nextWeekClick} />
      </div>
      <div className='Table-Main'> 
      <table>
        <BookingThead weekdays={weekdays.map(dayObj => dayObj.weekdays)} dateString={weekdays.map(dayObj => dayObj.dateString)} />
        <BookingTbody weekdays={weekdays.map(dayObj => dayObj.dateString)} />
      </table>
      </div>
      
    </>
  )
}
