import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from 'react-icons/fa';
import { AuthContext } from "../context/authContext";
import { FiCalendar, FiMap, FiMapPin } from "react-icons/fi";

const Events = () => {
    const {currentUser} = useContext(AuthContext);

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
        },
        ,
        {
            eventId: 4,
            title: "Event 4",
            descr: "Something something something",
            date:"Date",
            place: "Somewhere",
            capacity: 15,
            img: "https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        ,
        {
            eventId: 5,
            title: "Event 5",
            descr: "Something something something",
            date:"Date",
            place: "Somewhere",
            capacity: 15,
            img: "https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            eventId: 6,
            title: "Event 5",
            descr: "Something something something",
            date:"Date",
            place: "Somewhere",
            capacity: 15,
            img: "https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        
    ]

    // Define the event date (year, month [0-based], day, hour, minute, second)
    const eventDate = new Date(2023, 8, 20, 11, 0, 0); // September 20, 2023, 11:00:00

    // Calculate the time difference in milliseconds between now and the event date
    const now = new Date();
    const timeDifference = eventDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // State to hold the countdown values
    const [countdown, setCountdown] = useState({ days, hours, minutes, seconds });

    // Update the countdown every second
    useEffect(() => {
        const interval = setInterval(() => {
            const updatedTimeDifference = eventDate - new Date();
            const updatedDays = Math.floor(updatedTimeDifference / (1000 * 60 * 60 * 24));
            const updatedHours = Math.floor((updatedTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const updatedMinutes = Math.floor((updatedTimeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const updatedSeconds = Math.floor((updatedTimeDifference % (1000 * 60)) / 1000);
            setCountdown({ days: updatedDays, hours: updatedHours, minutes: updatedMinutes, seconds: updatedSeconds });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return(
        <div className="events-div">
            <div className="main-event">
                <div className="content">
                     <h1>FITNESS FUN DAY</h1>
                    <p className="date">Semptember 20, 2023, 11:00 AM</p>
                    <p className="location">FusionFit Fitness Center, Anytown</p>
                    <div className="time">
                        <div className="one">
                            <p>Days:</p>
                            <p>Hours: </p>
                            <p>Minutes: </p>
                            <p>Seconds: </p>
                        </div>
                        <div className="two">
                            <span>{countdown.days}</span>
                            <span>{countdown.hours}</span>
                            <span>{countdown.minutes}</span>
                            <span>{countdown.seconds}</span>
                        </div>
                       
                    </div>
                </div>
                
                
                   
                
            </div> 
            <div className="middle">
                 <h3>Upcoming events</h3>
                 {currentUser.role === "employee" &&
                 (<Link to="/write" className="link"><button>Create event <FaPlus className="icon"/></button></Link>)}
            </div>
           
           <div className="events">
           
            {events.map(event=>(
                <div className="event" key={event.eventId}>
                    <div className="img">
                        <img src={event.img} alt="" />
                    </div>
                    <div className="content">
                        <h1>{event.title}</h1>
                        <p><FiCalendar className="icon"/>{event.date}</p>
                        <p><FiMapPin className="icon"/>{event.place}</p>
                        <Link className="link" to={`/event/${event.eventId}`}><button>Read More</button></Link>
                    </div>
                </div>
            ))}
           </div>
        </div>
    )
}

export default Events