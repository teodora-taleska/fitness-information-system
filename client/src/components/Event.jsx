import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiCalendar, FiEdit, FiMapPin, FiTrash } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import moment from "moment"
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Event = () => {
    const {currentUser} = useContext(AuthContext)
    const[event, setEvent] = useState([])
    const [date, setDate] = useState(null)

    const [guest, setGuest] = useState(false)
    const [showGuestPopup, setShowGuestPopup] = useState(false)

    const [showPopup, setShowPopup] = useState(false)
    const [loading, setLoading] = useState(false)
    const PORT = process.env.PORT || 5067
    
    const handleUser = () => {
        if (currentUser.role === "employee" || currentUser.role === "member"){
            setGuest(false)
        } else{
           setGuest(true) 
        }
        
    }

    useEffect(() =>{
        handleUser();

        if (showPopup){
            setLoading(true);
            // Simulate an asynchronous operation
            setTimeout(()=>{
                setLoading(false)
            }, 3000); // Simulate a 3-second delay
        }
    }, [showPopup])

    const handleReservation = () => {
        if (guest) {
            setShowGuestPopup(true)
        } else {
            setShowPopup(true)
        }
    }

        
    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }
    

    const location = useLocation()
    const eventId = location.pathname.split("/")[2]
    const navigate = useNavigate()


    useEffect(()=>{
        const fetchData = async () => {
            try{
                const res = await axios.get(`http://88.200.63.148:${PORT}/api/events/${eventId}`);
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
            const res = await axios.delete(`http://88.200.63.148:${PORT}/api/events/${eventId}`)
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


                <button className="reserve" onClick={handleReservation}>RESERVE A SLOT</button>
           </div>
           <Menu cat={event.cat}/>

           {showGuestPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <p>Before making a reservation for attendance at the event, it is necessary to complete the registration process.</p>
                        <div className="buttons">
                            <button onClick={() => setShowGuestPopup(false)}>Cancel</button>
                            <Link className="link" to="/register"><button >Register</button></Link>
                        </div>
                        
                    </div>
                </div>
           )}

            {showPopup && (
                <div className="popup">
                    {loading ? (
                        <div className="loading-overlay">
                            <div className="loading-circle"></div>
                            <p>Loading...</p>
                        </div>
                    ) : (
                        <div className="popup-content">
                            <p>You have been successfully registered for the event.</p>
                            <button onClick={() => setShowPopup(false)}>OK</button>
                        </div>
                    )}
                </div>
            )}
           
        </div>
    )
}

export default Event