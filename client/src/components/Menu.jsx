import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = ({cat}) => {
    const[events, setEvents] = useState([])
    const PORT = process.env.PORT || 5067
   
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const res = await axios.get(`http://88.200.63.148:${PORT}/api/events/?cat=${cat}`);
                const recEvents = res.data.slice(1, 4); // Get elements from index 1 to index 3 (4th element is excluded)
                setEvents(recEvents);
            }catch (err) {
                console.log(err)
            }
        };
        fetchData();
    }, [cat]); 


    return(
        <div className="menu">
            
            <h1>Other events you may like</h1>
                {events.map(event=>(
                    <div className="event" key={event.eventId}>
                        <img src={event.img} alt="" />
                        <h3>{event.title}</h3>
                        <button>Read More</button>
                    </div>
                ))}
            
        </div>
    )
}

export default Menu