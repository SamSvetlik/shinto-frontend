import React, { useState } from "react";
import axios from "axios";


const SignUp = () => {
    const [state, setState] = useState({
        name: "", 
        email: "",
        password: "",
        emergencyContact: "",
        emergencyNumber: "",
        birthday: "",
        profilePic: ""
    })

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
    };
    
    const createUser = (e) => {
        e.preventDefault()
        console.log("creating new user...")
        let newUser = {...state}
        newUser.birthday = new Date().toISOString().slice(0, 10)
        axios.post('https://shinto-backend.vercel.app/signup', {...newUser})
            .then(res => console.log("created user: ", res))
            .catch(err => console.log("error: ", err))
    }

    return (
        <div>
            <form className="login-form" onSubmit={createUser}>
                <label>Name</label>
                <input name="name" type="text" value={state.name} onChange={handleTextChange}></input>
                <label>Email</label>
                <input name="email" type="email" value={state.email} onChange={handleTextChange}></input>
                <label>Password</label>
                <input name="password" type="text" value={state.password} onChange={handleTextChange}></input>
                <label>Emergency Contact</label>
                <input name="emergencyContact" type="text" value={state.emergencyContact} onChange={handleTextChange}></input>
                <label>Emergency Phone #</label>
                <input name="emergencyNumber" type="text" value={state.emergencyNumber} onChange={handleTextChange}></input>
                <label>Birthday **change**</label>
                <input name="birthday" type="text" value={state.birthday} onChange={handleTextChange}></input>
                <label>Profile Pic</label>
                <input name="profilePic" type="text" value={state.profilePic} onChange={handleTextChange}></input>
                <input type="submit" value="submit"></input>
            </form>
        </div>
    )
}

export default SignUp