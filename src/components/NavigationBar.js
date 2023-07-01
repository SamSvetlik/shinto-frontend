import { Link } from "react-router-dom"

const NavigationBar = (props) => {
    const { user } = props

    return (
        <>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/login"}>{Object.keys(user).length === 0 ? "Login" : "Logout" }</Link>
        <Link to={"/attendance"}>Attendance</Link>
        <Link to={"/calendar"}>Caldendar</Link>
        </>
    )
}

export default NavigationBar