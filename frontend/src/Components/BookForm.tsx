import React from 'react'

interface CreateBookingProps {
    setAddBooking: (boolean: boolean) => void;
}



function BookForm({setAddBooking}: CreateBookingProps): JSX.Element {


  return (
    <>
    <form>
        <input type="datetime-local" name="Datum" id='Datum' placeholder='Datum...'/>
        <input type="number" name="starttid" id='starttid' placeholder='starttid...' />
        <input type="number" name="passlängd" id='passlängd' placeholder='passlängd...'/>
        <input type="text" name="Passtyp" id='Passtyp' placeholder='Passtyp...' />
        <input type="text" name="tränare" id='tränare' placeholder='tränare...'/>
        {/* <button type='submit' onClick={}></button> */}
    </form>
    </>
  )
}

export default BookForm