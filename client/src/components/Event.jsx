import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiCalendar, FiEdit, FiMapPin, FiTrash } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import moment from "moment"
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Event = () => {
    const[event, setEvent] = useState([])
    const [date, setDate] = useState(null)

        
    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }
    

    const location = useLocation()
    const eventId = location.pathname.split("/")[2]
    const navigate = useNavigate()

    const {currentUser} = useContext(AuthContext)

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const res = await axios.get(`http://88.200.63.148:5067/api/events/${eventId}`);
                setEvent(res.data);
                const d = new Date(res.data.date)
                const year = d.getUTCFullYear();
                const month = String(d.getUTCMonth()+1).padStart(2, '0');
                const day = String(d.getUTCDate()).padStart(2, '0');
                const hours = String(d.getUTCHours()+2).padStart(2, '0');
                const minutes = String(d.getUTCMinutes()).padStart(2, '0');
                const seconds = String(d.getUTCSeconds()).padStart(2, '0');
                const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
                setDate(formattedDate);
                
            }catch (err) {
                console.log(err)
            }
        };
        fetchData();
    }, [eventId]); 

    const handleDelete = async () =>{
        try{
            const res = await axios.delete(`http://88.200.63.148:5067/api/events/${eventId}`)
            navigate("/events/?cat=gym")
        }catch (err) {
            console.log(err)
        }
    }

    return(
        <div className="single-event">
           
           <div className="content">
                <img src={event?.img} alt="" />
                
                <div className="edit">
                    <p>Posted {moment(event.postDate).fromNow()}</p>
                    {currentUser.userId === event.userId &&
                    (<div>
                        <Link ><FiEdit className="edit-b"/></Link>
                        <FiTrash className="edit-b" onClick={handleDelete}/>
                    </div>)
                    }
                </div>
                <h1>{event.title}</h1>

                

                <p><FiCalendar className="icon"/> Date: {date}</p>
                <p><FiMapPin className="icon"/> Place: {event.place} </p>
                <p className="descr">{getText(event.descr)}</p>
                <button className="reserve">RESERVE A SLOT</button>
           </div>
           <Menu cat={event.cat}/>
           
        </div>
    )
}

export default Event