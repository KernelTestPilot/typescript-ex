import React, { CSSProperties } from 'react'
import { Bookings } from './BookingTbody';

interface BookElementProps {
    booking: Bookings
}

export default function BookElement({booking}: BookElementProps): JSX.Element {

    const time: number = booking.hours;
    const styles: CSSProperties = {height: `${time}00%`, paddingBottom: `${time === 1 ? 0 : 2 * time}px`}

    return (
    <div className='booked' style={styles}>
        <p>{booking.trainType}</p><p>{booking.trainer}</p>
    </div>
  )
}
