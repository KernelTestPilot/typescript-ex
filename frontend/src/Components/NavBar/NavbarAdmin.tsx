
import React, { useContext } from 'react';
import {UserContext} from "../../App"
import { Link } from 'react-router-dom';
import gympic from "../../Assets/gympic.png";

interface NavBarAdminProps {
    handleLogout: () => void;
  }

  function NavbarAdmin({ handleLogout }: NavBarAdminProps): JSX.Element {
  const user = useContext(UserContext);

    return(
      <>
       <div className='navbar'>
        <h1>Strong n' Epics</h1>
        <div className='navbar-img'>
        <img src={gympic} alt="A superstrong dude" />
        </div>
        <div className='navbar-main'>
        <div className='navbar-loggedin'>
        <h4>Logged in as: {user?.role}</h4>
        </div>
        <ul>
        <Link to={"/book"}>Home</Link>
        <Link to={"/admin/bookings"}>Book in trainer</Link>
        <Link to={"/admin/users"}>User list</Link>
        <Link to={"/"} onClick={handleLogout}>Log out</Link>
        </ul>
        </div>
    </div>
      </>
    )

}

export default NavbarAdmin;