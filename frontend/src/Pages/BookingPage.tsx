import React, { useEffect }  from 'react'
import { useNavigate } from 'react-router';
import Navbar from '../Components/NavBar/Navbar';
import BookTable from '../Components/BookingTable/BookTable';

function BookingPage(): JSX.Element {
  const navigate = useNavigate();

  useEffect((): void => {
    const token: string | null = sessionStorage.getItem("token");

    if(token === null) {
      navigate("/");
    }
  }, [navigate]);
    
  return (
    <div className='maincontainer'>
      <Navbar />
      <div className='TableWrapper'>
      <BookTable/>
      </div>
    </div>
  )
}

export default BookingPage