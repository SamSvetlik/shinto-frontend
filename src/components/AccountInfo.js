import { useState } from "react";
import axios from "axios";


const AccountInfo = ({user, setUser, token}) => {

    const [updatedUser, setUpdatedUser] = useState(user)
    const [isEditing, setIsEditing] = useState(false)
    
    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser((prevState) => {
        return {
            ...prevState,
            [name]: value,
        };
        });
    };
    
    function msToDays(ms) {
        const conversion = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
        const days = Math.ceil(ms / conversion); // Calculate the number of days and round up
        
        return days;
      }

    const ageCalc = (dateString) => {
        const today = new Date()
        const birthdate = new Date(dateString)
        let years = today.getFullYear() - birthdate.getFullYear()
        if (today.getMonth() > birthdate.getMonth()) {
            years --
        } else if (today.getMonth() === birthdate.getMonth() && today.getDate() > birthdate.getDate()) {
            years --
        }
        return years
    }
    
    const timeRemaining = () => {
        const today = new Date()
        const primedate = new Date(user.renewalDate)
        console.log("primedate = " + primedate)
        const daysLeft = 30 - msToDays(today - primedate)
        if (daysLeft < 0) {
            return `Expired! Last renewal was ${user.renewalDate.slice(0, 10)}`
        }
        return daysLeft
    }

    // bug: refresh in protected component gives a runtime error
    // solution: create global boolean variable for first load, 
    // conditionally render null until the variable reads true

    console.log(user)

    const toggleEdit = () => {
        setIsEditing(!isEditing)
    }

    const discardChanges = () => {
        toggleEdit()
        setUpdatedUser(user)
    }

    const submitEdit = (e)=> {
        e.preventDefault()
        axios.put(`https://shinto-backend.vercel.app/users/${user.id}`, 
            {...updatedUser}, 
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            .then(res => {
                console.log(res)
                setUser(updatedUser)
                alert("Info updated!")
                toggleEdit()
                
            })
            .catch(err => console.log("error: ", err))
    }

    const newDateString = () => {
        return new Date().toISOString().slice(0, 10)
    }

    const handleDateChange = () => {
        setUpdatedUser((prevState) => {
            return {
                ...prevState,
                renewalDate: newDateString(),
            };
            });
    }

    return (
    
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <section>
                    <div className="profilePicContainer">
                    <img src={user.profilePic} /> 
                    {/* todo: conditional rendering to upload new pic
                    ... once I figure out image hosting */}
                    </div>
                    <div>
                        <h1>{user.name}</h1>
                        <h2>{user.beltRank}</h2>
                        {/* todo: dropdown menu to change belt */}
                        <h3>{user.isAdmin ? "Instructor" : "Student"}</h3>
                        {/* todo: promotion to admin */}
                        <p>{user.beltProgress}</p>
                        {/* todo: progress bar, conditional [-/+] buttons */}
                    </div>
                </section>
                <section>
                    <div>
                        <h2>Membership</h2>
                        {isEditing
                        ? <button onClick={handleDateChange}>Reset subscription!</button>
                        : <p>Days remaining: {timeRemaining()}</p>
                        }
                        <p>Member since: {user.memberSince.slice(0, 10)}</p>
                    </div>
                    <div>
                        <h2>General Information</h2>
                        {isEditing
                        ?   
                        <>
                            <label>Emergency Contact: </label>
                            <input name="emergencyContact" value={updatedUser.emergencyContact} onChange={handleTextChange}></input>
                        </>  
                        :
                        <p>Emergency Contact: {user.emergencyContact}</p>
                        }
                        {isEditing
                        ?
                        <>
                            <label>Emergency Number: </label>
                            <input name="emergencyNumber" value={updatedUser.emergencyNumber} onChange={handleTextChange}></input>
                        </>
                        :
                        <p>Emergency Number: {user.emergencyNumber}</p>
                        }
                        <p>Age: {ageCalc(user.birthday)}</p>
                        <p>Birthday: {user.birthday.slice(0, 10)}</p>
                    </div>
                </section>
                <section>
                    <h2>Notes</h2>
                    {isEditing
                    ?
                    <textarea maxLength={255} name="notes" onChange={handleTextChange}>{updatedUser.notes}</textarea>
                    :
                    <p>{user.notes}</p>
                    }
                </section>
            </form>
            <button onClick={isEditing ? discardChanges : toggleEdit}>{isEditing ? "Discard edits" : "Edit info"}</button>
            {isEditing ? <button onClick={submitEdit}>Confirm changes</button> : null}
        </div>
    )
}

export default AccountInfo
