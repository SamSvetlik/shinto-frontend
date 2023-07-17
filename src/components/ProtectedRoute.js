import { useState, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import cookie from 'cookie'

const ProtectedRoute = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const cookies = cookie.parse(document.cookie)
    const location = useLocation()
    
    useEffect(()=> {
        console.log("checks shintoken: ", cookies["shintoken"])
        if (cookies["shintoken"] && cookies["shintoUser"]) {
            setIsLoggedIn(true)
            console.log("true")
        } else {
            setIsLoggedIn(false)
            console.log("false")
          }
    }, [location])

  return (
    isLoggedIn 
        ? <Outlet /> 
        : <Navigate to="/login" />
  );
};

export default ProtectedRoute;
