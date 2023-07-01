import { useState } from "react"
import axios from "axios"

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
        axios.post("https://shinto-backend.vercel.app/events", {...event})
            .then(res => {
                console.log(JSON.parse(res.config.data))
                alert("New event added to calendar!")
            })
            .catch(err => console.log("error: ", err))
    }

    return (
        <>
            <form className="eventCreater-form" onSubmit={submitEvent}>
                <label>Event Name</label>
                <input name="eventName" type="text" value={event.eventName} onChange={handleTextChange}></input>
                <label>Description</label>
                <input name="eventDescription" type="text" value={event.eventDescription} onChange={handleTextChange}></input>
                <label>Date and Time</label>
                <input name="eventTime" type="text" placeholder="2023-06-26 12:30:00" value={event.eventTime} onChange={handleTextChange}></input>
                <input type="submit" value="submit"></input>
            </form>
        </>
    )
}

export default CreateEvent