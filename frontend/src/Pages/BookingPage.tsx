import React  from 'react'
import { Hour, Weekday } from '../Types/ScheduleTypes';
import  {useState, useEffect } from "react";
import BookingThead from '../Components/BookingThead';
import BookingTbody from '../Components/BookingTbody';
import { BookingInfo } from '../Types/BookingType';
import Calendar from '../Services/Calendar';

export const fakeData: Array<BookingInfo> = [
    {startDate: "2023-09-05",
    timeStart: 9,
    timeEnd: 10,
    trainer: "Isac",
    trainType: "Yoga"},
    {startDate: "2023-09-07",
    timeStart: 10,
    timeEnd: 13,
    trainer: "Filip",
    trainType: "Kondition"},
    {startDate: "2023-09-09",
    timeStart: 8,
    timeEnd: 10,
    trainer: "Isac",
    trainType: "Kondition"}
]


function BookingPage() {
    const calendar = new Calendar();    
    // Hämtar datumet för måndagen för veckan man är på
    const mondayDate = calendar.getMonday();
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