import {db} from "../index.js"
import jwt from "jsonwebtoken"


export const getEvents = (req, res) =>{
    const q = req.query.cat 
    ? "SELECT * FROM Event WHERE cat=?" 
    : "SELECT * FROM Event" 
    
    db.query(q, [req.query.cat], (err, data)=>{
        if (err) return res.status(500).send(err);
        return res.status(200).json(data)
    });
}


export const getEvent = (req, res) =>{
    const q = "SELECT * FROM Event WHERE eventId=?"

    db.query(q, [req.params.id], (err, data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data[0])
    })
}

export const addEvent = (req, res) =>{
   /* const token = req.cookies.access_token
    if(!token) return res.status(401).json(401).json("Not authenticated!")

    jwt.verify(token, "jwtkey", (err, userInfo)=>{
    if (err) return res.status(403).json("Token is not valid") */

    const q = "INSERT INTO Event(`title`, `descr`, `date`, `place`, `capacity`, `img`, `cat`, `userId`, `postDate`) VALUES (?)" 

    const values = [
        req.body.title,
        req.body.descr,
        req.body.date, 
        req.body.place,
        req.body.capacity, 
        req.body.img, 
        req.body.cat, 
        req.body.userId, 
        req.body.postDate
    ]

    db.query(q,[values], (err, data) =>{
        if (err) return res.status(500).json("Event not created")
        return res.json("Event has been created")
    })
   // });
}

export const deleteEvent = (req, res) =>{
    /* const token = req.cookies.access_token
    if(!token) return res.status(401).json("Not authenticated!")

    jwt.verify(token, "jwtkey", (err, userInfo)=>{
        if (err) return res.status(403).json("Token is not valid") */

        const eventId = req.params.id
        const q = "DELETE FROM Event WHERE `eventId`=?"

        db.query(q, [eventId], (err, data)=>{
            if (err) return res.status(403).json(err)

            return res.json("Event has been deleted!")
        })
   // })
}

export const updateEvent = (req, res) =>{
    /* const token = req.cookies.access_token
    if(!token) return res.status(401).json(401).json("Not authenticated!")

    jwt.verify(token, "jwtkey", (err, userInfo)=>{
    if (err) return res.status(403).json("Token is not valid") */
 
    const eventId = req.params.id
    const q = "UPDATE Event SET `title` = ?, `descr` = ? , `date` = ?, `place`= ?, `capacity` = ? , `img` = ?, `cat` = ? WHERE `eventId` = ?" 

    const values = [
        req.body.title,
        req.body.descr,
        req.body.date, 
        req.body.place,
        req.body.capacity,
        req.body.img, 
        req.body.cat, 
    ]

    db.query(q,[...values, eventId], (err, data) =>{
        if (err) return res.status(500).json(err)
        return res.json("Event has been updated")
    })
    // });
}
