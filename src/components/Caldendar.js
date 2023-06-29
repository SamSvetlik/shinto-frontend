import { useState } from "react"
import axios from "axios"


const Calendar = () => {

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
        </>
    )
}

export default Calendar