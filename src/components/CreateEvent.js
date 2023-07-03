import { useState } from "react"
import axios from "axios"
import DateTimePicker from "react-datetime-picker"
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const CreateEvent = (props) => {
    const {userId} = props

    const [event, setEvent] = useState({
        eventName: "",
        eventDescription: "",
        hostId: userId,
        eventTime: ""
    })

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setEvent((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
    };

    const submitEvent = (e) => {
        e.preventDefault()
        axios.post("https://shinto-backend.vercel.app/events", {...event, eventTime: eventTime.toISOString().replaceAll("T", " ").slice(0, -5)})
            .then(res => {
                console.log(JSON.parse(res.config.data))
                alert("New event added to calendar!")
            })
            .catch(err => console.log("error: ", err))
    }

    const [eventTime, setEventTime] = useState(new Date())

    
    return (
        <>
            <form className="eventCreater-form" onSubmit={submitEvent}>
                <label>Event Name</label>
                <input name="eventName" type="text" value={event.eventName} onChange={handleTextChange} required></input>
                <label>Description</label>
                <input name="eventDescription" type="text" value={event.eventDescription} onChange={handleTextChange} required></input>
                <label>Date and Time</label>
                {/* <input name="eventTime" type="text" placeholder="2023-06-26 12:30:00" value={event.eventTime} onChange={handleTextChange}></input> */}
                <DateTimePicker onChange={setEventTime} value={eventTime}  />
                <input type="submit" value="submit"></input>
            </form>
        </>
    )
}

export default CreateEvent