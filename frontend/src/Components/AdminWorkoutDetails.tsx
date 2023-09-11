import React, { useEffect, useState, MouseEvent } from 'react'
import { Bookings } from './BookingTable/BookingTbody';
import { PersonInfo } from '../Types/User';
import fetchHelper from '../Utils/fetchHelper';
import { firstToUpperCase } from '../Utils/firstToUpperCase';

/*
  User story 1:1 & 1:2, Component 1/1
  Description: Renders the details for a workout on the admin page.
*/

interface AdminWorkoutDetailsProps {
    setRenderWD: (value: boolean) => void;
    booking: Bookings;
}

function AdminWorkoutDetails({setRenderWD, booking}: AdminWorkoutDetailsProps): JSX.Element {
  const [subbedUsers, setSubbedUsers] = useState<PersonInfo[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>("");

  
  useEffect((): void => {

    async function getSubbedUsers(): Promise<void> {
      fetchHelper(`/admin/subUsers?bookingID=${booking.bookingid}`, "GET")
          .then((result: Response) => {result.json()
          .then((users: PersonInfo[]) => {setSubbedUsers(users)})})
    }

    getSubbedUsers();
  }, [booking]);
  
  async function unsubUser(username: string): Promise<void> {
    const result: Response = await fetchHelper("/user/book", "DELETE", {bookingId: booking.bookingid, username})
    if(result.status < 400){
      setErrorMsg("Sub removed!")
    }else{
      setErrorMsg("Malfunction, contact closest front-end dev!")
    }
  }

  function ListUsers(subbedUser: PersonInfo, index:number): JSX.Element {
    return <div key={`user-index-${index}`} className='workout-user'>
        <p>{firstToUpperCase(subbedUser.username)}</p>
        <button onClick={() => unsubUser(subbedUser.username)}>Unsub</button>
    </div>
  }

  function onBackgroundClick(e: MouseEvent<HTMLDivElement>): void {
    const element: Element = e.target as Element;
    
    if(element.className === "black-background") setRenderWD(false);
  }

  return (
  <div className='black-background' onClick={onBackgroundClick}>
    <div className='workout-details'>
        <h3>{booking.trainType}</h3>
        <p>Registrerade Användare</p>
        {subbedUsers.map(ListUsers)}
        <p>{errorMsg}</p>
    </div>
  </div>);
}

export default AdminWorkoutDetails;