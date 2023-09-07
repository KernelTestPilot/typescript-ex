
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {UserContext} from "../App"
import { Link } from 'react-router-dom';
import gympic from "../Assets/gympic.png";

function Navbar  ():JSX.Element {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout(): void{
      sessionStorage.clear();
      navigate("/")
  }
  return (
    <>
    <div className='navbar'>
        <h1>Strong n' Epics</h1>
      
        <div className='navbar-img'>
        <img src={gympic} alt="A superstrong dude" />
        </div>
    
        <div className='navbar-main'>
        <div className='navbar-loggedin'>
        <h4>Logged in as: {user?.username}</h4>
        </div>
        <ul>
        
        <Link to={"/"}>Home</Link>
        <Link to={"/book"}>Book pass</Link>
        {user?.role === 'ADMIN' && <Link to="/admin/">Admin page</Link>}
        <Link to={"/"} onClick={handleLogout}>Log out</Link>
        </ul>
     
        </div>
    </div>
    </>
  )
}

export default Navbar