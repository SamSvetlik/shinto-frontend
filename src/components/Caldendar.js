import { useState } from "react"
import axios from "axios"
import CreateEvent from "./CreateEvent"


const Calendar = (props) => {

    const {userId} = props
    const [events, setEvents] = useState([])
    
    const getEvents = () => {
        axios.get('https://shinto-backend.vercel.app/events')
            .then(response => setEvents(response.data))
    
    }

    return (
        <>
        <button onClick={getEvents}>Get events </button>
        <ul>

        {events.map((item) => {
            return (
                <li key={item.id}>{item.eventName}</li>
                )
            })}
        </ul>
        <CreateEvent userId={userId}/>
        </>
    )
}

export default Calendar