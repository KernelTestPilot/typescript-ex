import React, { useState } from 'react'

interface CreateBookingProps {
    setAddBooking: (boolean: boolean) => void;
}

interface AddBookingProps {
  date:"",

}



function BookForm({setAddBooking}: CreateBookingProps): JSX.Element {

  const [formData, setFormData] = useState({date:"", startTime:0, exerciseLength:0, exerciseType:"", trainer:"" })

  // async function handleBookAdd () {
  //   const result : Response = await fetchHelper()
  // }

  return (
    <>
    <form>
        <input type="datetime-local" name="date" id='date' placeholder='date...'/>
        <input type="number" name="starttime" id='starttime' placeholder='starttime...' />
        <input type="number" name="exerciseLength" id='exerciselength' placeholder='exerciselength...'/>
        <input type="text" name="exerciseType" id='exerciseType' placeholder='exerciseType...' />
        <input type="text" name="trainer" id='trainer' placeholder='trainer...'/>
        {/* <button type='submit' onClick={}></button> */}
    </form>
    </>
  )
}

export default BookForm