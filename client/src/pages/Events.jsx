import React from "react";
import { Link } from "react-router-dom";

const Events = () => {

    const events = [
        {
            eventId: 1,
            title: "Event 1",
            descr: "Something something something",
            date:"Date",
            place: "Somewhere",
            capacity: 15,
            img: "https://images.pexels.com/photos/903171/pexels-photo-903171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            eventId: 2,
            title: "Event 2",
            descr: "Something something something",
            date:"Date",
            place: "Somewhere",
            capacity: 15,
            img: "https://images.pexels.com/photos/863926/pexels-photo-863926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            eventId: 3,
            title: "Event 3",
            descr: "Something something something",
            date:"Date",
            place: "Somewhere",
            capacity: 15,
            img: "https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]

    return(
        <div className="events-div">
           {/* <div className="events">
            {events.map(event=>(
                <div className="event" key={event.eventId}>
                    <div className="img">
                        <img src={event.img} alt="" />
                    </div>
                    <div className="content">
                        <h1>{event.title}</h1>
                        <p>{event.date}</p>
                        <Link to={`/event/${event.eventId}`}><button>Read More</button></Link>
                    </div>
                </div>
            ))}
           </div> */}
        </div>
    )
}

export default Events