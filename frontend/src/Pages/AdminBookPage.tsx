import React, {useState} from 'react'
import BookForm from '../Components/BookForm';
import BookTable from '../Components/BookingTable/BookTable';

function AdminBookPage(): JSX.Element {
  const [addBooking, setAddBooking] = useState<boolean>(false);

  function onAddBookingClick(): void {
    setAddBooking(!addBooking);
  }

  return (
    <div className='maincontainer'>
       <div className='TableWrapper'>
          <div className='TableForm'> 
            <button onClick={onAddBookingClick}>Add Booking</button>
            {addBooking && <BookForm />}
          </div>
          <BookTable/>
       </div>
    </div>
  )
}

export default AdminBookPage