import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"


import dotenv from "dotenv";
dotenv.config({path: '.env'}); //Load the enviroment variables from .env file

import mysql from "mysql2"

import eventRouter from "./routes.events.js"
import authRoutes from "./routes/auth.js"
import multer from "multer"

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

// Upload file to the server

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/upload')
    }, 
    filename: function (req, file, cb) {
        cb(null, Date.now()+file.originalName)
    }
})


const upload = multer({dest: storage})

app.post('/api/upload', upload.single('file'), function (req, res)=>{
    const file = req.file;
    res.statur(200).json(file.filename)
})

// Routes
app.use("/api/auth/", authRoutes)
app.use("/api/events", eventRoutes)


export const db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
})


db.connect((err) => {
  if (err) {
      console.log("ERROR: "+ err)
      return
  }
  console.log("Database connected!")
  // connection.release()
})



// const port = 5000
app.listen(5067, () => {
    console.log("Server connected on port!:" + 5067)
})
