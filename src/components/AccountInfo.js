import { useState } from "react";


const AccountInfo = (props) => {
    const {user} = props

    const [updatedUser, setUpdate] = useState({user})
    
    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setUpdate((prevState) => {
        return {
            ...prevState,
            [name]: value,
        };
        });
    };
    // todo:
    // set flag for edit on/off
    // edit on = all fields become inputs,
    // handleTextChange to update info in updatedUser
    // back button to discard
    // confirm button to post to backend/users

    return (
        <div>
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
                    <p>Days remaining: function to calculate</p>
                    <p>Member since: {user.memberSince}</p>
                </div>
                <div>
                    <h2>General Information</h2>
                    <p>Emergency Contact: {user.emergencyContact}</p>
                    <p>Emergency Number: {user.emergencyNumber}</p>
                    <p>Age: Function to calculate</p>
                    <p>Birthday: {user.birthday}</p>
                </div>
            </section>
            <section>
                <h2>Notes</h2>
                <p>{user.notes}</p>
            </section>
        </div>
    )
}

export default AccountInfo
