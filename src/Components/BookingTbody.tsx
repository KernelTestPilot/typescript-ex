import React from 'react'
import { daysToMilliseconds, fakeData } from '../Pages/BookingPage';
import { Hour, Weekday } from '../Types/ScheduleTypes';
import BookElement from './BookElement';
import { BookingInfo } from '../Types/BookingType';

interface BookingTbodyProps {
    weekdays: Array<Weekday>,
    mondayDate: Date,
}

const hours: Array<Hour> = [8,9,10,11,12,13,14,15,16,17,18];

export default function BookingTbody({weekdays, mondayDate}: BookingTbodyProps): JSX.Element {

    function findBookingForDay(dayString: string, hour: number): BookingInfo | undefined {
        return fakeData.find(data => data.startDate === dayString && hour === data.timeStart);
    }
    
  return (
    <tbody>{hours.map((hour) => {
        return <tr>
            <td><p>{hour}</p></td>
            {weekdays.map((day, dayIndex) => {
                let bookElement: JSX.Element = <div></div>;
                const dayObject: Date = new Date(mondayDate);
                dayObject.setTime(dayObject.getTime() + daysToMilliseconds(dayIndex));
                    
                const dayString: string = dayObject.toLocaleDateString();

                const booking: BookingInfo | undefined = findBookingForDay(dayString, hour);
            
                if(booking !== undefined) {
                    bookElement = <BookElement booking={booking}/>;
                }

                return <td>{bookElement}</td>
            })}
            </tr>;
    })}
    </tbody>
  )
}
