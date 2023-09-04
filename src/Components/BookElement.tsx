import React from 'react'
import { BookingInfo } from '../Types/BookingType'

interface BookElementProps {
    booking: BookingInfo
}

export default function BookElement({booking}: BookElementProps): JSX.Element {

    const time: number = booking.timeEnd - booking.timeStart;
    const styles = {height: `${time}00%`, paddingBottom: `${time === 1 ? 0 : 2 * time}px`}

    return (
    <div className='booked' style={styles}>
        <p>{booking.trainType}</p><p>{booking.trainer}</p>
    </div>
  )
}
