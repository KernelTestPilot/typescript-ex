import React, { useEffect, useState, createContext } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import BookingPage from './Pages/BookingPage';
import AdminRoutes from './Pages/AdminRoutes';
import "./stylesheet/main.css";
import { PersonInfo } from './Types/User';
import Footer from './Components/Footer';
import { Bookings } from './Components/BookingTable/BookingTbody';
import fetchHelper from './Utils/fetchHelper';

/*
  User story 1:6, Component 1/1
  Description: Renders the root component for the entire website. Must have role ADMIN to access the admin path.
*/

const UserContext = createContext<PersonInfo | undefined>(undefined);

function App(): JSX.Element {
  const [user, setUser] = useState<PersonInfo | undefined>();

  useEffect(() => {
    const token: string | null = sessionStorage.getItem("token");

    if(token !== null) {
      const savedUser = JSON.parse(token) as PersonInfo;
      
      fetchHelper(`/user/subscriptions?username=${savedUser.username}`,"GET").then((result: Response) => {
        result.json().then((json: Bookings[]) => {
          savedUser.subscriptions = json;
          setUser(savedUser);
        });
      });
    }
  }, []);

  return (
   <BrowserRouter>
   <UserContext.Provider value={user}>

    <Routes>
      <Route index element={<LandingPage setUser={setUser} />}/>
      <Route path="/book" element={<BookingPage/>}/>
      {user !== undefined && user.role === "ADMIN" && <Route path="/admin/*" element={<AdminRoutes />}/>}
    </Routes>
    <Footer />
 
    </UserContext.Provider>
   </BrowserRouter>
  );
}

export default App;
export { UserContext };