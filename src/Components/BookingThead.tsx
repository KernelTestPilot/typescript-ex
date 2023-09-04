import React from 'react'
import { Weekday } from '../Types/ScheduleTypes';
import { daysToMilliseconds } from '../Pages/BookingPage';

interface BookingTheadProps {
    weekdays: Array<Weekday>,
    mondayDate: Date
}

export default function BookingThead({weekdays, mondayDate}: BookingTheadProps) {

  return (
    <thead>
        <tr>
            <th><p>Dag/Tid</p></th>
                {weekdays.map((day, index) => {
                    const dateObject = new Date(mondayDate);
                    dateObject.setTime(dateObject.getTime() + daysToMilliseconds(index));
                    const dateString: string = dateObject.toLocaleDateString();
                    return <th><p>{day} {dateString.substring(5, dateString.length)}</p></th>
                })}
        </tr>
    </thead>
  )
}
