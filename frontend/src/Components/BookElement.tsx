import React, { CSSProperties } from 'react'
import { Bookings } from './BookingTbody';
import fetchHelper from '../Utils/fetchHelper';
import { PersonInfo } from '../Types/User';

interface BookElementProps {
    booking: Bookings;
    user: PersonInfo | undefined
}

export default function BookElement({booking, user}: BookElementProps): JSX.Element {
    async function onSubscribeClick() {
        const result = await fetchHelper("/user/book", "POST", {bookingid: booking.bookingid, username: user!.username});

        const json = await result.json();

        console.log(json);
    }

    const time: number = booking.hours;
    const styles: CSSProperties = {height: `${time}00%`, paddingBottom: `${time === 1 ? 0 : 2 * time}px`}
    
    const urlLocation = window.location.href;

    function isOnAdmin(): boolean {
        return user !== undefined && user.role === "ADMIN" && urlLocation.endsWith("/admin/bookings");
    }

    const btn: JSX.Element = isOnAdmin() ? 
        <button>See workout details</button>
        : 
        <button onClick={onSubscribeClick}>Subscribe</button>

    return (
    <div className='booked' style={styles}>
        <p>{booking.trainType}</p><p>{booking.trainer}</p>
        {btn}
    </div>
  )
}
