import React, { useState } from 'react'
import BookingThead from './BookingThead'
import BookingTbody from './BookingTbody'
import Calendar from '../../Services/Calendar';
import WeekButtons from './WeekButtons';

/*
  User story: 2:1
  Component: 1/4
  Description: Renders the table for all bookings available. 
*/

export default function BookTable(): JSX.Element {
    const [timeOffset, setTimeOffset] = useState<number>(0);
    const [calendar, setCalendar] = useState<Calendar>(new Calendar(timeOffset));

     //hämtar veckans datum + dagar som objekt
    const weekdays:{ weekdays: string; dateString: string } [] = calendar.getWeek();

    function updateOffset(time: number): void {
        setTimeOffset(timeOffset + time);
        setCalendar(new Calendar(timeOffset + time));
      }

    function nextWeekClick(): void {
        updateOffset(calendar.daysToMilliseconds(7));
      }
      
      function previousWeekClick(): void {
        updateOffset(calendar.daysToMilliseconds(-7));
      }
    
      function resetOffsetClick(): void {
        setTimeOffset(0);
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
