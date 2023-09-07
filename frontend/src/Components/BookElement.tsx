import React, { CSSProperties, useContext } from 'react'
import { Bookings } from './BookingTbody';
import fetchHelper from '../Utils/fetchHelper';
import { UserContext } from '../App';

interface BookElementProps {
    booking: Bookings;
}

export default function BookElement({booking}: BookElementProps): JSX.Element {
    const user = useContext(UserContext);
    
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
