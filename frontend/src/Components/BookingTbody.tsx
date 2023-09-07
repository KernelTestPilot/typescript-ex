import React, { useEffect, useState } from 'react'
import { Hour } from '../Types/ScheduleTypes';
import BookElement from './BookElement';
import fetchHelper from '../Utils/fetchHelper';
interface BookingTbodyProps {
    weekdays: string[]
}

export interface Bookings {
    bookingid: number,
    date: string,
    hours: number,
    startTime: number,
    trainer: string,
    trainType: string
}

const hours: Array<Hour> = [8,9,10,11,12,13,14,15,16,17,18];

export default function BookingTbody({weekdays}: BookingTbodyProps): JSX.Element {
    const [bookings, setBookings] = useState<Bookings[]>([]);

    async function bookingData (): Promise<Bookings[]> {
    
        const result: Response = await fetchHelper("/user/book", "GET")
    
        return (await result.json()) as Bookings[];
    }

    function findBookingForDayAndHour(dayString: string, hourOfDay: number): Bookings | undefined {
        return bookings.find((data: Bookings) => {
            return data.date.split("T")[0] === dayString && hourOfDay === data.startTime
        }) as Bookings | undefined;
    }

    function getTdElement(day: string, dayIndex: number, hourOfDay: number): JSX.Element {
        let bookElement: JSX.Element = <div></div>;
                        
        const booking: Bookings | undefined = findBookingForDayAndHour(day, hourOfDay);
        
        if(booking !== undefined) {
            bookElement = <BookElement booking={booking}/>;
        }
        return <td key={`table-td-${dayIndex}`}>{bookElement}</td>
    }

    function getTableRow(hourOfDay: number, hourIndex: number): JSX.Element {
        return <tr key={`table-row-${hourIndex}`}>
            <td><p>{hourOfDay}</p></td>
            {weekdays.map((day, dayIndex) => getTdElement(day, dayIndex, hourOfDay))}
            </tr>;
    }

    useEffect(() => {
        bookingData().then(result => {
            setBookings(result);
        })
    }, [setBookings]);

  return (
    <tbody>
        {hours.map<JSX.Element>(getTableRow)}
    </tbody>
  )
}
