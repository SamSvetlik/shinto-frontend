import { useState } from "react";


const AccountInfo = (props) => {
    const {user} = props

    const [updatedUser, setUpdate] = useState({user})
    const [isEditing, setIsEditing] = useState(false)
    
    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setUpdate((prevState) => {
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

    // todo:
    // handleTextChange to update info in updatedUser
    // back button to discard
    // confirm button to post to backend/users
    console.log(user)

    const toggleEdit = () => {
        setIsEditing(!isEditing)
        console.log("isEditing: ", isEditing)
    }

    const submitEdit = ()=> {
        console.log("confirm changes")
    }

    const newDateString = () => {
        // console.log(new Date().toISOString().slice(0, 10))
        console.log("New Date String!")
    }


    return (
    
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <section>
                    <div className="profilePicContainer">
                    <img src={user.profilePic} />
                    </div>
                    <div>
                        <h1>{user.name}</h1>
                        <h2>{user.beltRank}</h2>
                        <h3>{user.isAdmin ? "Instructor" : "Student"}</h3>
                        <p>{user.beltProgress}</p>
                    </div>
                </section>
                <section>
                    <div>
                        <h2>Membership</h2>
                        {isEditing
                        ? <button onClick={newDateString}>Reset subscription!</button>
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
                            <input value={user.emergencyContact}></input>
                        </>  
                        :
                        <p>Emergency Contact: {user.emergencyContact}</p>
                        }
                        {isEditing
                        ?
                        <>
                            <label>Emergency Contact: </label>
                            <input value={user.emergencyNumber}></input>
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
                    <textarea>{user.notes}</textarea>
                    :
                    <p>{user.notes}</p>
                    }
                </section>
            </form>
            <button onClick={toggleEdit}>{isEditing ? "Discard edits" : "Edit info"}</button>
            {isEditing ? <button onClick={newDateString}>Confirm changes</button> : null}
        </div>
    )
}

export default AccountInfo
