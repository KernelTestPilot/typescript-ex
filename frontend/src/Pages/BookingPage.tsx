import React, { useEffect }  from 'react'
import { PersonInfo } from '../Types/User';
import { useNavigate } from 'react-router';
import BookTable from '../Components/BookTable';


interface BookingPageProps {
  user: PersonInfo | undefined
}

function BookingPage({user}: BookingPageProps): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    const token: string | null = sessionStorage.getItem("token");

    if(token === null) {
      navigate("/");
    }
  }, [navigate]);
    
  return (
    <div>
      <h2>BookingPage - Welcome {user?.username}</h2>
      <BookTable user={user}/>
    </div>
  )
}

export default BookingPage