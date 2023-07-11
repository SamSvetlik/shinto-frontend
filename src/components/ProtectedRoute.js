import { useState, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import cookie from 'cookie'

const ProtectedRoute = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const cookies = cookie.parse(document.cookie)
    
    useEffect(()=> {
        console.log("checks shintoken: ", cookies["shintoken"])
        if (cookies["shintoken"] && cookies["shintoUser"]) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
          }
    })

  return (
    isLoggedIn 
        ? <Outlet /> 
        : <Navigate to="/login" />
  );
};

export default ProtectedRoute;
