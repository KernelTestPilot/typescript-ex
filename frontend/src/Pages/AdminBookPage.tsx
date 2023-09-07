import React, {useState} from 'react'
import BookForm from '../Components/BookForm';
import BookTable from '../Components/BookTable';

function AdminBookPage(): JSX.Element {
    const [addBooking, setAddBooking] = useState<boolean>(false);

    function onAddBookingClick(): void {
      setAddBooking(!addBooking);
    }
  return (
    <>
    <div> <button onClick={onAddBookingClick}>Add Booking</button></div>
          {addBooking && <BookForm />}
          <BookTable/>
    </>
  )
}

export default AdminBookPage