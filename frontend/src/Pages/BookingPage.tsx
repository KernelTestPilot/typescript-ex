import React, { useEffect }  from 'react'
import BookingThead from '../Components/BookingThead';
import BookingTbody from '../Components/BookingTbody';
import Calendar from '../Services/Calendar';
import { PersonInfo } from '../Types/User';
import { useNavigate } from 'react-router';


interface BookingPageProps {
  user: PersonInfo | undefined
}

function BookingPage({user}: BookingPageProps): JSX.Element {
  const navigate = useNavigate();
    const calendar = new Calendar();
    //hämtar veckans datum + dagar som objekt
    const weekdays = calendar.getWeek();

    useEffect(() => {
      const token: string | null = sessionStorage.getItem("token");

      if(token === null) {
        navigate("/");
      }
    }, [navigate]);
    
  return (
    <div><h2>BookingPage - Welcome {user?.username}</h2>
        <table>
        <BookingThead weekdays={weekdays.map(dayObj => dayObj.weekdays)} dateString={weekdays.map(dayObj => dayObj.dateString)} />
        <BookingTbody weekdays={weekdays.map(dayObj => dayObj.dateString)} />
        </table>
    </div>
  )
}

export default BookingPage