import React, { useEffect }  from 'react'
import { useNavigate } from 'react-router';
import Navbar from '../Components/Navbar';
import BookTable from '../Components/BookTable';

function BookingPage(): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    const token: string | null = sessionStorage.getItem("token");

    if(token === null) {
      navigate("/");
    }
  }, [navigate]);
    
  return (
    <div>
      <Navbar />
      <BookTable/>
    </div>
  )
}

export default BookingPage