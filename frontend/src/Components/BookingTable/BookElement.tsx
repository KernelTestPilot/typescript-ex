import React, { CSSProperties, useContext, useState } from 'react'
import { Bookings } from './BookingTbody';
import { UserContext } from '../../App';
import BookButtons from './BookButtons';
import { useLocation } from 'react-router';
import AdminWorkoutDetails from '../AdminWorkoutDetails';

/*
  User story: 2:1
  Component: 4/4
  Description: Renders the workout information.
*/

interface BookElementProps {
    booking: Bookings;
}

export default function BookElement({booking}: BookElementProps): JSX.Element {
    const [renderWD, setRenderWD] = useState<boolean>(false);
    const user = useContext(UserContext);
    const time: number = booking.hours;
    const location = useLocation();
    const OnAdmin = location.pathname.startsWith ("/admin");
    const styles: CSSProperties = {height: `${time}00%`, paddingBottom: `${time === 1 ? 0 : 2 * time}px`}
    

    function isOnAdmin(): boolean {
        return user !== undefined && user.role === "ADMIN" && OnAdmin;
    }

    function onSeeWDClick(): void {
        setRenderWD(true);
    }

    const btn = isOnAdmin() ? 
        <button onClick={onSeeWDClick}>See workout details</button> : 
        <BookButtons booking={booking}  />;
    
    return (
    <div className='booked' style={styles}>
        <p>{booking.trainType}</p>
        <p>{booking.trainer}</p>
        {btn}
        {renderWD && <AdminWorkoutDetails booking={booking} setRenderWD={setRenderWD} />}
    </div>
  )
}
