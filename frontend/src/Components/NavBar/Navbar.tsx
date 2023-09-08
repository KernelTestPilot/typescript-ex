
import React, { useContext } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import {UserContext} from "../../App"
import NavbarAdmin from './NavbarAdmin';
import NavbarUser from './NavbarUser';

function Navbar  ():JSX.Element {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const OnAdmin = location.pathname.startsWith ("/admin");

  function isOnAdmin(): boolean {
      return user !== undefined && user.role === "ADMIN" && OnAdmin ;
  }

  function handleLogout(): void{
      sessionStorage.clear();
      navigate("/")
  }

  if(isOnAdmin()){
    return(
      <>
      <div>
       <NavbarAdmin handleLogout ={handleLogout}/>
       </div>
      </>
    )
  }else{
    return (
      <>
        <div>
        <NavbarUser handleLogout ={handleLogout}/>
        </div>
      </>
    )
  }
 
}

export default Navbar