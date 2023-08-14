import { db } from "../index.js"
import bcrypt from "bcryptjs"


export const login = (req, res) =>{
    res.json("login")
}

export const register = (req, res) => {
    
    // CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email = ?"
    db.query(q, [req.body.email], (err, data)=>{
        if (err) return res.json(err)
        if (data.length) return res.status(409).json("User already exists!")

        // Hash the password and create a user
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        // Insert the user to the db
        const q = "INSERT INTO users(`name`, `surname`, `email`, `password`, `role`, `phoneNumber`) VALUES (?)"
        const values = [
            req.body.name,
            req.body.surname, 
            req.body.email, 
            hash,
            req.body.role,
            req.body.phoneNumber,
        ]

        db.query(q, [values], (err,data)=>{
            if (err) return res.json('Please enter valid values');
            return res.status(200).json("User has been created!")
            
        })
    })
}

export const logout = (req, res) => {
    res.json("logout")
}
