import { db } from "../index.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const login = (req, res) =>{
    // CHECK USER
    const q = "SELECT * FROM users WHERE email = ?"
    db.query(q, [req.body.email], (err,data)=>{
        if (err) return res.json(err);
        // If we don't have any user in the db with this email
        if (data.length === 0) return res.status(404).json("User not found!")

        // If there is no error and our user exists -->  check password
        const isPassCorrect = bcrypt.compareSync(req.body.password, data[0].password)

        if (!isPassCorrect) return res.status(400).json("Wrong email or password!")

        // jsonwebtoken
        const token = jwt.sign({ userId: data[0].userId}, "jwtkey")
        const {password, ...other} = data[0]
        res.cookie("access_token", token, {
            httpOnly:true
        }).status(200).json(other)
    })
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
            "member",
            req.body.phoneNumber,
        ]

        db.query(q, [values], (err,data)=>{
            if (err) return res.json('Please enter valid values');
            return res.status(200).json("User has been created!")
            
        })
    })
}

export const logout = (req, res) => {
	res.clearCookie("access_token", {
	sameSite:"none", 
	secure:true
	}).status(200).json("User has been logged out.")
    
}
