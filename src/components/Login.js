import { useState } from "react"
import axios from "axios"

const Login = (props) => {

    const { setToken, setUser } = props

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const signIn = (e) => {
        e.preventDefault()
        console.log("trying...")
        axios.post('https://shinto-backend.vercel.app/signin', {...state})
            .then(res => {
                setToken(res.data.token)
                setUser(res.data.user)
            })
            .catch(err => console.log("error: ", err))
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
            <form className="login-form" onSubmit={signIn}>
                <label>email</label>
                <input name="email" type="email" value={state.email} onChange={handleTextChange}></input>
                <label>password</label>
                <input name="password" type="password" value={state.password} onChange={handleTextChange}></input>
                <input type="submit" value="submit"></input>
            </form>
        </div>
    )
}

export default Login