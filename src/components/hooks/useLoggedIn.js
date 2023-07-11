import { useState, useEffect } from "react"
import { useLocation } from "react-router"
import cookie from 'cookie'

export function useLoggedIn(){

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const cookies = cookie.parse(document.cookie)
    const location = useLocation()
    
    useEffect(()=> {
        if (cookies["shintoken"] && cookies["shintoUser"]) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)}
    }, [location])
    console.log(location)
    console.log(isLoggedIn)
    return isLoggedIn
}