import React from 'react'
import LoginForm from '../Components/LoginForm'
import Banner from '../Components/Banner'
import { useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import fetchHelper from '../Utils/fetchHelper'
import { PersonInfo } from '../Types/User'

interface Credentials {
  message: string,
  token: object
}

interface LandingPageProps {
  setUser: (user: PersonInfo) => void
}

function LandingPage({setUser}: LandingPageProps): JSX.Element {

  const [formData, setFormData] = useState({ username: '', password: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  function handleFormChange(event: ChangeEvent<HTMLInputElement>): void {
    const {value,name} = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
}


async function handleLogin () {
  setErrorMessage("");
  const result: Response = await fetchHelper("/auth/login", "POST", formData);

  const response: Credentials = await result.json();
  if (result.status < 400){
    sessionStorage.setItem("token" , JSON.stringify(response.token))
    setUser(response.token as PersonInfo);
    navigate("/book")
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