

const AccountInfo = (props) => {
    const {user} = props
    return (
        <div>
            <img src={user.profilePic} />
            <h1>{user.name}</h1>
            <h2>{user.beltRank}</h2>
            <h3>{user.isAdmin ? "Instructor" : "Student"}</h3>
            <h3>{user.beltProgress}</h3>
            <h2>Membership</h2>
            <h3>Days remaining: function to calculate</h3>
            <h3>Member since: {user.memberSince}</h3>
            <h2>General Information</h2>
            <h3>Emergency Contact: {user.emergencyContact}</h3>
            <h3>Emergency Number: {user.emergencyNumber}</h3>
            <h3>Age: Function to calculate</h3>
            <h3>Birthday: {user.birthday}</h3>
            <h2>Notes</h2>
            <p>{user.notes}</p>
        </div>
    )
}

export default AccountInfo
