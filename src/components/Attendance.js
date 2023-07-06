import { useState, useEffect } from "react"
import axios from "axios"

const Attendance = (props) => {
    const { token } = props

    const [eventList, setEventList] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const [eventId, setEventId] = useState("1")
    const [attendingUsers, setAttendingUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState("")

    
    useEffect(() => {
        // This useEffect gets all events and puts them in a dropdown
        axios.get('https://shinto-backend.vercel.app/events')
        .then(response => setEventList(response.data))
    }, [])
    useEffect(() => {
        // This useEffect gets all users so the instructor can add them piecemeal to an event
        axios.get('https://shinto-backend.vercel.app/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res =>setAllUsers(res.data))
        .catch(err => console.error(err))
    }, [])
    useEffect(()=> {
        setAttendingUsers([])
        // This useEffect gets all users currently attending a selected event
        axios.get(`https://shinto-backend.vercel.app/attendance/events/${eventId}`)
            .then(res => setAttendingUsers(res.data))

    }, [eventId])

    const logChange= (e) => {
        setEventId(e.target.value)
    }

    const addAttendee = (user) => {

        setSelectedUser(user.id)
    }

    const createAttendanceEvent = (e) => {
        e.preventDefault()
        const payload = {
            eventId: eventId,
            userId: selectedUser
        }
        axios.post('https://shinto-backend.vercel.app/attendance', {...payload})
            .then (res => console.log(res))
    }

    return (
        <div>
            "You must be logged in to access attendance!"
            <form>
                <label htmlFor="events">Pick an event:</label>
                <select name="events" onChange={logChange}>
                    {eventList.map((event)=> {
                        return(
                            <option key={event.eventId} value={event.id}>{event.eventName}</option>
                            )
                        })}
                </select>
            </form>
            <form>
                This is the form to add an attendance event.
                <h4>
                    {selectedUser}
                </h4>
                will be added to:
                <h4>
                    {eventId}
                </h4>
                <button onClick={createAttendanceEvent}>Create!</button>
            </form>
            <div>
                Every user:
                <ul>
                    {allUsers.map((user)=> {
                        return (
                            <li onClick={() => {addAttendee(user)}}>{user.name}</li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <ul>

               {attendingUsers.map((user)=> {
                return (
                    <li>{user.name}</li>
                )
                })}
               </ul>
            </div>
        </div>
    )
}

export default Attendance