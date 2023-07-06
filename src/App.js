import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import cookie from "cookie"
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
    const cookies = cookie.parse(document.cookie)
    useEffect(()=> console.log(token, "cookie: ", cookies["shintoken"]), [token])
    return (
        <>
        <BrowserRouter>
            <NavigationBar user={user}/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login setToken={setToken} user={user} setUser={setUser}/>} />
                <Route path='/attendance' element={<Attendance token={token}/>} />
                <Route path='/calendar' element={<Calendar userId={user.id} token={token}/>} />
                <Route path="/account" element={<AccountInfo user={user}/>} />
                <Route path="/signup" element={<SignUp setUser={setUser} />} />
            </Routes>
        </BrowserRouter>        
        </>
    )
}

export default App