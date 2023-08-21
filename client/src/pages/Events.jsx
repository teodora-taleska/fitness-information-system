import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPlus } from 'react-icons/fa';
import { AuthContext } from "../context/authContext";
import { FiCalendar, FiMap, FiMapPin } from "react-icons/fi";
import axios from "axios";

const Events = () => {
    const {currentUser} = useContext(AuthContext);
    const [catOpen, setCatOpen] = useState(false)
    
    const[events, setEvents] = useState([])

    const cat = useLocation().search


    useEffect(()=>{
        const fetchData = async () => {
            try{
                const res = await axios.get(`http://88.200.63.148:5068/api/events${cat}`);
                setEvents(res.data);
                
            }catch (err) {
                console.log(err)
            }
        };
        fetchData();
    }, [cat]); 


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
                 (<Link to="/write" className="link"><button className="buttons">Create event <FaPlus className="icon"/></button></Link>)}
            
                <button className="buttons cat" onClick={() => setCatOpen(!catOpen)}>Category <FaPlus className="icon"/></button>
                {catOpen && <div className="dropdown">
                            <ul>
                                <Link className="link " to="/events/?cat=gym" onClick={() => setCatOpen(false)}><li className="f" >Gym</li></Link>
                                <Link className="link" to="/events/?cat=zumba" onClick={() => setCatOpen(false)}><li >Zumba</li></Link>
                                <Link className="link" to="/events/?cat=yoga" onClick={() => setCatOpen(false)}><li >Yoga</li></Link>
                                <Link className="link" to="/events/?cat=group-cycling" onClick={() => setCatOpen(false)}><li >Group cycling</li></Link>
                                <Link className="link" to="/events/?cat=gymnastics" onClick={() => setCatOpen(false)}><li >Gymnastics</li></Link>
                                <Link className="link" to="/events/?cat=aerobics" onClick={() => setCatOpen(false)}><li className="l">Aerobics</li></Link>
                            </ul>
                        </div>}
                        </div>
           
           <div className="events">
           
            {events.map(event=>(
                <div className="event" key={event.eventId}>
                    <div className="img">
                        <img src={event.img} alt="" />
                    </div>
                    <div className="content">
                        <h1>{event.title}</h1>
                        {/* <p><FiCalendar className="icon"/>{event.date}</p> */}
                        <p><FiMapPin className="icon"/>{event.place}</p>
                        <Link className="link" to={`/event/${event.eventId}`}><button>Read More</button></Link>
                    </div>
                </div>
            ))}
           </div>
           <footer className="footer">
                <p>&copy; 2023 FusionFit Fitness Center. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Events