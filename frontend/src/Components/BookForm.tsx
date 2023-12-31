import React, { FormEvent, useState,ChangeEvent } from 'react'
import fetchHelper from '../Utils/fetchHelper';

/*
  User story 1:5, Component 1/1
  Description: Renders the bookform for adding new workouts.
*/

interface AddBookingProps {
  date: string,
  startTime: number,
  hours: number,
  trainType: string,
  trainer: string
}

type InputType = string | number;

function BookForm(): JSX.Element {
  const [serverMessage, setServerMessage] = useState<string>('');

  const initdateFormData: AddBookingProps = {
    date: "",
    startTime: 0,
    hours: 0,
    trainType: "",
    trainer:"",
  };

  const [formData, setFormData] = useState<AddBookingProps>(initdateFormData);

  function handleChange(event: ChangeEvent<HTMLInputElement>):void {
    const name = event.target.name;
    let value: InputType = event.target.value;
    
    if(event.target.type === "number") {
      value = Number(value);
    }
    
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }
    
  async function handleBookAdd (event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if(formData.hours <= 0){
      setServerMessage("Workout has to be longer than 1 hour!");
      return;
    }
    
    if(((formData.startTime + formData.hours) > 18) || (formData.startTime < 8)) {
      setServerMessage("Workout is outside the timeframe!");
      return;
    }
    
    const response : Response = await fetchHelper("/admin/book", "POST", formData)
    if(response.status < 400) {
      setServerMessage("Workout added!");
    } else{
      setServerMessage("Book was not added, contact closest Javascript-programmer");
    }
  }

  return (<>
    <form onSubmit={handleBookAdd}>
        <input type="date" name="date" id='date' placeholder='date...' onChange={handleChange} />
        <input type="number" name="startTime" id='startTime' placeholder='starttime...' onChange={handleChange} />
        <input type="number" name="hours" id='hours' placeholder='hours...' onChange={handleChange}/>
        <input type="text" name="trainType" id='trainType' placeholder='exerciseType...' onChange={handleChange} />
        <input type="text" name="trainer" id='trainer' placeholder='trainer...' onChange={handleChange} />
        <button type='submit'>Add Book</button>
    </form>
    <p>{serverMessage}</p>
    </>
  )
}

export default BookForm;