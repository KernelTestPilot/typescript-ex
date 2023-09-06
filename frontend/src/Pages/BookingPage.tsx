import React, { useEffect,useContext }  from 'react'
import BookingThead from '../Components/BookingThead';
import BookingTbody from '../Components/BookingTbody';
import Calendar from '../Services/Calendar';
import { PersonInfo } from '../Types/User';
import { useNavigate } from 'react-router';
import Navbar from '../Components/Navbar';
import {UserContext} from "../App"



function BookingPage(): JSX.Element {
  const navigate = useNavigate();
    const calendar = new Calendar();
    //hämtar veckans datum + dagar som objekt
    const weekdays = calendar.getWeek();
    const user = useContext(UserContext);
    useEffect(() => {
      const token: string | null = sessionStorage.getItem("token");

      if(token === null) {
        navigate("/");
      }
    }, [navigate]);
    
  return (
  
    <div>
      <Navbar></Navbar>
      <h2>BookingPage - Welcome {user?.username}</h2>
        <table>
        <BookingThead weekdays={weekdays.map(dayObj => dayObj.weekdays)} dateString={weekdays.map(dayObj => dayObj.dateString)} />
        <BookingTbody weekdays={weekdays.map(dayObj => dayObj.dateString)} />
        </table>
    </div>
  )
}

export default BookingPage