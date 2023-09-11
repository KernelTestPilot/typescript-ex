import React from 'react'
import LoginForm from '../Components/LoginForm'
import Banner from '../Components/Banner'
import { useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import fetchHelper from '../Utils/fetchHelper'
import { PersonInfo, role } from '../Types/User'
import { Bookings } from '../Components/BookingTable/BookingTbody';
/*
  User story: 3:1 
  Component: 2/2
  Description: Login form for users to get access to the booking page.
*/

interface Credentials {
  message: string,
  token: object,
  phone: number,
  email: string
}
interface Token {
  username: string,
  role: role
}
interface FormData {
  username: string,
  password: string
}

interface LandingPageProps {
  setUser: (user: PersonInfo) => void
}

function LandingPage({setUser}: LandingPageProps): JSX.Element {

  const [formData, setFormData] = useState<FormData>({ username: '', password: '' });

  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  function handleFormChange(event: ChangeEvent<HTMLInputElement>): void {
    const {value,name} = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
}

async function handleLogin (): Promise<void> {
  setErrorMessage("");
  const result: Response = await fetchHelper("/auth/login", "POST", formData);

  const response: Credentials = await result.json();
  if (result.status < 400) {
    sessionStorage.setItem("token" , JSON.stringify(response.token))

    fetchHelper(`/user/subscriptions?username=${formData.username}`,"GET").then(result => {
      result.json().then(json => {
        const newUser: PersonInfo = {
          username: formData.username, 
          role: (response.token as Token).role,
          subscriptions: json as Bookings[],
          email: response.email,
          phone: response.phone,
        }
        setUser(newUser);
        navigate("/book")
      });
    });

  } else {
    setErrorMessage(response.message);
  }
};
  return (
    <>
    <div className='maincontainer'>
      <div className='container-login'>
    <Banner />
  
    <LoginForm 
      handleFormChange={handleFormChange}
      handleLogin={handleLogin} />
         
    <p>{errorMessage}</p>
    </div>
    </div>
    </>
  )
}

export default LandingPage