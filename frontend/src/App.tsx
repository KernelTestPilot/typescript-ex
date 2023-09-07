import React, { useEffect, useState, createContext } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import BookingPage from './Pages/BookingPage';
import AdminPage from './Pages/AdminPage';
import "./stylesheet/main.css";
import { PersonInfo } from './Types/User';
import Footer from './Components/Footer';
import { Bookings } from './Components/BookingTbody';
import fetchHelper from './Utils/fetchHelper';

const UserContext = createContext<PersonInfo | undefined>(undefined);

function App(): JSX.Element {
  const [user, setUser] = useState<PersonInfo | undefined>();

  useEffect(() => {
    const token: string | null = sessionStorage.getItem("token");

    if(token !== null) {
      const savedUser = JSON.parse(token) as PersonInfo;
      
      fetchHelper(`/user/subscriptions?username=${savedUser.username}`,"GET").then(result => {
        result.json().then(json => {
          savedUser.subscriptions = json as Bookings[];
          setUser(savedUser);
        });
      });
    }

  }, []);

  return (

   <BrowserRouter>
   <UserContext.Provider value={user}>
   <div className='maincontainer' >
    <Routes>
      <Route index element={<LandingPage setUser={setUser} />}/>
      <Route path="/book" element={<BookingPage/>}/>
      {user !== undefined && user.role === "ADMIN" && <Route path="/admin/*" element={<AdminPage />}/>}
    </Routes>
    <Footer></Footer>
    </div>
    </UserContext.Provider>
   </BrowserRouter>

  );
}

export default App;
export { UserContext };