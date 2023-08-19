import React from "react";

const Menu = () => {
    const events = [
        {
            eventId: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            descr: "Something something something",
            date:"Date",
            place: "Somewhere",
            capacity: 15,
            img: "https://images.pexels.com/photos/903171/pexels-photo-903171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            eventId: 2,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            descr: "Something something something",
            date:"Date",
            place: "Somewhere",
            capacity: 15,
            img: "https://images.pexels.com/photos/863926/pexels-photo-863926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            eventId: 3,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            descr: "Something something something",
            date:"Date",
            place: "Somewhere",
            capacity: 15,
            img: "https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]


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