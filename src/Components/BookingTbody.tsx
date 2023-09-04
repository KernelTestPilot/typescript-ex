import React from 'react'
import { fakeData } from '../Pages/BookingPage';
import { Hour, Weekday } from '../Types/ScheduleTypes';
import BookElement from './BookElement';
import { BookingInfo } from '../Types/BookingType';
import Calendar from '../Services/Calendar';
interface BookingTbodyProps {
    weekdays: String[],
}

const hours: Array<Hour> = [8,9,10,11,12,13,14,15,16,17,18];

export default function BookingTbody({weekdays}: BookingTbodyProps): JSX.Element {

    function findBookingForDay(dayString: String, hour: number): BookingInfo | undefined {
        return fakeData.find(data => data.startDate === dayString && hour === data.timeStart);
    }

  return (
    <tbody>{hours.map((hour) => {
        return <tr>
            <td><p>{hour}</p></td>
            {weekdays.map((day, dayIndex) => {
                let bookElement: JSX.Element = <div></div>;
                const booking: BookingInfo | undefined = findBookingForDay(day, hour);
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
