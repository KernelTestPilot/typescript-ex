import React, { useEffect, useState } from 'react'
import { Hour } from '../Types/ScheduleTypes';
import BookElement from './BookElement';
import fetchHelper from '../Utils/fetchHelper';
interface BookingTbodyProps {
    weekdays: string[],
}

export interface Bookings {
    bookingid: number,
    date: string,
    hours: number,
    startTime: number,
    trainer: string,
    trainType: string
}

async function bookingData (): Promise<Bookings[]> {
    
    const result: Response = await fetchHelper("/user/book", "GET")

    return (await result.json()) as Bookings[];
}

const hours: Array<Hour> = [8,9,10,11,12,13,14,15,16,17,18];

export default function BookingTbody({weekdays}: BookingTbodyProps): JSX.Element {
    const [bookings, setBookings] = useState<Bookings[]>([]);

    function findBookingForDay(dayString: string, hourOfDay: number): Bookings | undefined {
        return bookings.find(data => {
            return data.date.split("T")[0] === dayString && hourOfDay === data.startTime
        }) as Bookings | undefined;
    }

    useEffect(() => {
        bookingData().then(result => {
            setBookings(result);
        })
    }, [setBookings]);

  return (
    <tbody>{hours.map((hourOfDay) => {
        return <tr>
            <td><p>{hourOfDay}</p></td>
            {weekdays.map((day, dayIndex) => {
                let bookElement: JSX.Element = <div></div>;
                
                const booking: Bookings | undefined = findBookingForDay(day, hourOfDay);
                
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
