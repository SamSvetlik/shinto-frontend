import React, { useState, useEffect } from "react";
import Login from "./components/Login";

const App = () => {
    const [token, setToken] = useState("");
    const [user, setUser] = useState({})
    useEffect(()=> console.log(token), [token])
    return (
        <Login setToken={setToken} setUser={setUser}/>
    )
}

export default App