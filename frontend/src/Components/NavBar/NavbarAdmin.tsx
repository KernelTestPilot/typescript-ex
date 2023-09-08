
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
        <div className='navbar-loggedin'>
        <h1>Strong n' Epics</h1>
        <h4>Logged in as: {user?.role}</h4>
        </div>
        <div className='navbar-main'>
      
        
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