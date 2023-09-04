import React from 'react'
import LoginForm from '../Components/LoginForm'
import Banner from '../Components/Banner'
import UserList from '../Components/UserList'
import { useState,ChangeEvent, FormEvent } from 'react'
import {useNavigate } from 'react-router-dom';



function LandingPage() {

  const [formData, setFormData] = useState({ username: '', password: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {value,name} = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
}


const handleLogin = () => {
  console.log(formData)

  if(formData.username ==="test" && formData.password === "test"){
    const setToken =  {username: "Oskar", role: "admin"};
    navigate("/book")
    
  }

};
  return (
    <>
    <Banner />
    <LoginForm 
      handleFormChange={handleFormChange}
      handleLogin={handleLogin} />
    <UserList />
    </>
  )
}

export default LandingPage