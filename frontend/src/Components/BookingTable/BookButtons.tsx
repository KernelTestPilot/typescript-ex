import React, { useContext, useEffect, useState } from 'react'
import fetchHelper from '../../Utils/fetchHelper';
import { UserContext } from '../../App';
import { Bookings } from './BookingTbody';

/*
  User story: 2:2 & 2:3 
  Component: 1/1
  Description: Renders the buttons and logic to sub and unsub for a excersise
*/

interface BookButtonsProps{
    booking: Bookings;
}

function BookButtons({booking}: BookButtonsProps): JSX.Element {
    const user = useContext(UserContext);
    const [isSubscribed, setSub] = useState<boolean>(false);

    useEffect((): void => {
        setSub(isWorkoutInSubscriptions());

        function isWorkoutInSubscriptions(): boolean {
            const workout = user?.subscriptions.find((subscription): boolean => 
                subscription.bookingid === booking.bookingid
            );
            return workout !== undefined;
        }
    }, [user?.subscriptions, booking.bookingid]);

    async function onSubscribeClick(): Promise<void> {
        if(!isSubscribed){  
            const result: Response = await fetchHelper("/user/book", "POST", {bookingId: booking.bookingid, username: user!.username});
            if(result.status < 400) {
                setSub(true)
            }
        }
    }
    
    async function onUnsubscribeClick(): Promise<void> {
        if(isSubscribed){
            const result: Response = await fetchHelper("/user/book", "DELETE", {bookingId: booking.bookingid, username: user!.username});
            if(result.status < 400) {
                setSub(false);
            }
        }
    }

    if (isSubscribed){
        return <button onClick={onUnsubscribeClick}>Unsubscribe</button>;
    }
    
    return <button onClick={onSubscribeClick}>Subscribe</button>;
}

export default BookButtons