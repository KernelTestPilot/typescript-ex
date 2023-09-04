import React  from 'react'
import { Hour, Weekday } from '../Types/ScheduleTypes';
import  {useState, useEffect } from "react";
import BookingThead from '../Components/BookingThead';
import BookingTbody from '../Components/BookingTbody';
import { BookingInfo } from '../Types/BookingType';

const weekdays: Array<Weekday> = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

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

export function daysToMilliseconds(day: number): number {
    return day * 24 * 60 * 60 * 1000;
}

function BookingPage() {
    const mondayDate = new Date();
    
    // Hämtar datumet för måndagen för veckan man är på
     mondayDate.setTime(mondayDate.getTime() - (daysToMilliseconds(mondayDate.getDay() - 1)));

     

  return (
    <div><h2>BookingPage</h2>
        <table>
            <BookingThead mondayDate={mondayDate} weekdays={weekdays}/>
            <BookingTbody mondayDate={mondayDate} weekdays={weekdays}/>
        </table>
    </div>
  )
}

export default BookingPage