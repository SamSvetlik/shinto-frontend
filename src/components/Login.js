import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import cookie from "cookie"

const Login = (props) => {

    const { setToken, user, setUser } = props

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const signIn = (e) => {
        e.preventDefault()
        axios.post('https://shinto-backend.vercel.app/signin', {...state})
            .then(res => {
                setToken(res.data.token)
                document.cookie = cookie.serialize("shintoken", res.data.token, {maxAge: 100})
                setUser(res.data.user)
                document.cookie = cookie.serialize("shintoUser", JSON.stringify(res.data.user), {maxAge: 100})
                // Cookie persists for 24 hours, after which user needs to log in again
                navigate('/')
            })
            .catch(err => console.log("error: ", err))
    }

    const signOut = (e) => {
        e.preventDefault();
        console.log("Signing out")
        document.cookie = cookie.serialize("shintoken", null, {maxAge: 0})
        setToken("")
        document.cookie = cookie.serialize("shintoUser", null, {maxAge: 0})
        setUser({})

        navigate("/")
    }

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
    };

    return (
        <div>
            {Object.keys(user).length === 0
                ? 
                <form className="login-form" onSubmit={signIn}>
                <label>email</label>
                <input name="email" type="email" value={state.email} onChange={handleTextChange}></input>
                <label>password</label>
                <input name="password" type="password" value={state.password} onChange={handleTextChange}></input>
                <input type="submit" value="submit"></input>
            </form>
            :
            <button onClick={signOut}>Logout</button>}
        </div>
    )
}

export default Login