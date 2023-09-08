import React from 'react'
import LoginForm from '../Components/LoginForm'
import Banner from '../Components/Banner'
import { useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import fetchHelper from '../Utils/fetchHelper'
import { PersonInfo, role } from '../Types/User'
import { Bookings } from '../Components/BookingTable/BookingTbody';

interface Credentials {
  message: string,
  token: object
}

interface LandingPageProps {
  setUser: (user: PersonInfo) => void
}

function LandingPage({setUser}: LandingPageProps): JSX.Element {

  const [formData, setFormData] = useState({ username: '', password: '' });

  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  function handleFormChange(event: ChangeEvent<HTMLInputElement>): void {
    const {value,name} = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
}

interface Token {
  username: string,
  role: role
}

async function handleLogin () {
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
          subscriptions: json as Bookings[]
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
    <Banner />
    <LoginForm 
      handleFormChange={handleFormChange}
      handleLogin={handleLogin} />
    <p>{errorMessage}</p>
    </>
  )
}

export default LandingPage