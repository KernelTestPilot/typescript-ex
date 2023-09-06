import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import BookingPage from './Pages/BookingPage';
import AdminPage from './Pages/AdminPage';
import "./stylesheet/main.css";
import { PersonInfo } from './Types/User';

function App(): JSX.Element {
  const [user, setUser] = useState<PersonInfo | undefined>();

  useEffect(() => {
    const token: string | null = sessionStorage.getItem("token");

    if(token !== null) {
      setUser(JSON.parse(token) as PersonInfo);
    }

  }, []);

  return (

   <BrowserRouter>
   <div className='maincontainer' >
    <Routes>
      <Route index element={<LandingPage setUser={setUser} />}/>
      <Route path="/book" element={<BookingPage user={user}/>}/>
      {user !== undefined && user.role === "ADMIN" && <Route path="/admin/*" element={<AdminPage />}/>}
    </Routes>
    <div className='footer'> test</div>
    </div>
   </BrowserRouter>
  );
}

export default App;
