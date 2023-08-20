import {db} from "../index.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const getEmployees = (req, res) =>{
    const q = "SELECT * FROM users WHERE role=?" 
      
    db.query(q, "employee", (err, data)=>{
        if (err) return res.status(500).send(err);
        return res.status(200).json(data)
    });
}


export const getEmployee = (req, res) =>{
    const q = "SELECT * FROM users WHERE userId=?"

    db.query(q, [req.params.id], (err, data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data[0])
    })
}

export const addEmployee = (req, res) =>{
    // CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email = ?"
    db.query(q, [req.body.email], (err, data)=>{
        if (err) return res.json(err)
        if (data.length) return res.status(409).json("User already exists!")

        // Hash the password and create a user
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
    

    const q = "INSERT INTO users(`name`, `surname`, `email`, `password`, `role`, `phoneNumber`) VALUES (?)" 

    const values = [
        req.body.name,
        req.body.surname,
        req.body.email, 
        hash, 
        req.body.role, 
        req.body.phoneNumber
    ]

    db.query(q,[values], (err, data) =>{
        if (err) return res.status(500).json(err)
        return res.json("Employee has been created")
    })
})
}

export const deleteEmployee = (req, res) =>{
        const employeeId = req.params.id
        const q = "DELETE FROM users WHERE `userId`=?"

        db.query(q, [userId], (err, data)=>{
            if (err) return res.status(403).json(err)

            return res.json("Employee has been deleted!")
        })
}

export const updateEmployee = (req, res) =>{

    // Hash the password and update the user
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)

    const userId = req.params.id
    const q = "UPDATE users SET `name` = ?, `surname` = ? , `email` = ?, `password`= ?, `role` = ? , `phoneNumber` = ?" 

    const values = [
        req.body.name,
        req.body.surname,
        req.body.email, 
        hash,
        req.body.role,
        req.body.phoneNumber, 

    ]

    db.query(q,[...values, userId], (err, data) =>{
        if (err) return res.status(500).json(err)
        return res.json("Employee has been updated")
    })
}
