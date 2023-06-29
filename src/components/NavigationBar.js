import { Link } from "react-router-dom"

const NavigationBar = () => {

    return (
        <>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/attendance"}>Attendance</Link>
        <Link to={"/calendar"}>Caldendar</Link>
        </>
    )
}

export default NavigationBar