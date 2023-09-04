import React  from 'react'
import { Hour, Weekday } from '../Types/ScheduleTypes';
import  {useState, useEffect } from "react";
import { HtmlAttributes } from 'csstype';

const weekdays: Array<Weekday> = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const hours: Array<Hour> = [8,9,10,11,12,13,14,15,16,17,18];


interface todayDate {
todayDate: number;

}
const fakeData = [
    {startDate: "2023-09-05",
    timeStart: 9,
    timeEnd: 10,
    trainer: "Isac",
    trainType: "Yoga"},
    {startDate: "2023-09-07",
    timeStart: 10,
    timeEnd: 13,
    trainer: "Filip",
    trainType: "Kondition"}
]

function BookingPage() {
    const [dateToday, setDate] = useState<todayDate | undefined>(undefined);
    const mondayDate = new Date();
    
    // Hämtar datumet för måndagen för veckan man är på
    //setDate ( mondayDate.setTime(mondayDate.getTime() - ((mondayDate.getDay() - 1) * 24 * 60 * 60 * 1000)));
     mondayDate.setTime(mondayDate.getTime() - ((mondayDate.getDay() - 1) * 24 * 60 * 60 * 1000));

     function daysToMilliseconds(day: number): number {
        return day * 24 * 60 * 60 * 1000;
     }

  return (
    <div><h2>BookingPage</h2>
        <table>
            <thead><tr>
                <th><p>Dag/Tid</p></th>
                    {weekdays.map((day, index) => {
                        const dateObject = new Date(mondayDate);
                        dateObject.setTime(dateObject.getTime() + daysToMilliseconds(index));

                        const dateString: string = dateObject.toLocaleDateString();
                        
                        return <th><p>{day} {dateString.substring(5, dateString.length)}</p></th>
                    })}
                </tr></thead>
            <tbody>{hours.map((hour) => {
                return <tr><td><p>{hour}</p></td>{weekdays.map((day, index) => {
                    let bookElement: JSX.Element = <div></div>;
                    const dateObject: Date = new Date(mondayDate);
                    dateObject.setTime(dateObject.getTime() + (index * 24 * 60 * 60 * 1000));
                            
                    const dateString: string = dateObject.toLocaleDateString();

                    const booking = fakeData.find(data => data.startDate === dateString && hour === data.timeStart);
                    
                    if(booking !== undefined) {
                        const time: number = booking.timeEnd - booking.timeStart;
                        const styles = {height: `${time}00%`, "padding-bottom": `${time === 1 ? 0 : 2*time}px`}
                        bookElement = <div className='booked' style={styles}><p>{booking.trainType}</p><p>{booking.trainer}</p></div>;
                    }

                    return <td>{bookElement}</td>
                })}</tr>;
            })}</tbody>
        </table>
    </div>
  )
}

export default BookingPage