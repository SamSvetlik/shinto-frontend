import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Attendance from "./components/Attendance";
import Calendar from "./components/Caldendar";
import AccountInfo from "./components/AccountInfo";
import SignUp from "./components/SignUp";

const App = () => {
    const [token, setToken] = useState("");
    const [user, setUser] = useState({})
    useEffect(()=> console.log(user), [user])
    return (
        <>
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login setToken={setToken} setUser={setUser}/>} />
                <Route path='/attendance' element={<Attendance />} />
                <Route path='/calendar' element={<Calendar />} />
                <Route path="/account" element={<AccountInfo user={user}/>} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>        
        </>
    )
}

export default App