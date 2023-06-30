import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import AccountInfo from "./components/AccountInfo";
import SignUp from "./components/SignUp";

const App = () => {
    const [token, setToken] = useState("");
    const [user, setUser] = useState({})
    useEffect(()=> console.log(user), [user])
    return (
        <>
        <Login setToken={setToken} setUser={setUser}/>
        <AccountInfo user={user}/>
        <SignUp />
        </>
    )
}

export default App