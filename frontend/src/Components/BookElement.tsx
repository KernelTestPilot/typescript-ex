import React, { CSSProperties, useContext, useEffect, useState } from 'react'
import { Bookings } from './BookingTbody';
import fetchHelper from '../Utils/fetchHelper';
import { UserContext } from '../App';

interface BookElementProps {
    booking: Bookings;
}

export default function BookElement({booking}: BookElementProps): JSX.Element {
    const user = useContext(UserContext);
    const [isSubscribed, setSub] = useState<boolean>(false);

    useEffect(() => {
        setSub(isWorkoutInSubscriptions());
        
    }, [user?.subscriptions]);
    

    async function onSubscribeClick() {
        if(!isSubscribed){  
            const result = await fetchHelper("/user/book", "POST", {bookingId: booking.bookingid, username: user!.username});

            await result.json();

            if(result.status < 400) {
                setSub(true)
            }
        }
    }
    
    async function onUnsubscribeClick() {
        if(isSubscribed){
            const result = await fetchHelper("/user/book", "DELETE", {bookingId: booking.bookingid, username: user!.username});
        
            await result.json();

            if(result.status < 400){
                setSub(false);
            }
        }
    }

    const time: number = booking.hours;
    const styles: CSSProperties = {height: `${time}00%`, paddingBottom: `${time === 1 ? 0 : 2 * time}px`}
    
    const urlLocation = window.location.href;

    function isOnAdmin(): boolean {
        return user !== undefined && user.role === "ADMIN" && urlLocation.endsWith("/admin/bookings");
    }

    function isWorkoutInSubscriptions(): boolean {
        const workout = user?.subscriptions.find(sub => 
            sub.bookingid === booking.bookingid
        );

        return workout !== undefined;
    }
    const subBtn = isSubscribed ?  
        <button onClick={onUnsubscribeClick}>Unsubscribe</button> : 
        <button onClick={onSubscribeClick}>Subscribe</button>;

    const btn: JSX.Element = isOnAdmin() ? 
        <button>See workout details</button>
        : 
        subBtn

    return (
    <div className='booked' style={styles}>
        <p>{booking.trainType}</p><p>{booking.trainer}</p>
        {btn}
    </div>
  )
}
