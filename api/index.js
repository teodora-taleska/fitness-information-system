import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
import path from "path"

import dotenv from "dotenv";
dotenv.config({path: '.env'}); //Load the enviroment variables from .env file

import mysql from "mysql2"

import eventRoutes from "./routes/events.js"
import authRoutes from "./routes/auth.js"
import employeeRoutes from "./routes/employees.js"

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

// app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "public")));
app.use('/css', express.static(path.join(__dirname, "/public/static/css")));
app.use('/media', express.static(path.join(__dirname, "/public/static/media")));
app.use('/js', express.static(path.join(__dirname, "/public/static/js")));


// Routes
app.use("/api/auth/", authRoutes)
app.use("/api/events/", eventRoutes)
app.use("/api/employees", employeeRoutes)



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
app.listen(5068, () => {
    console.log("Server connected on port!:" + 5068)
})
