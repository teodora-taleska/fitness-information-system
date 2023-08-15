import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config({path: '.env'}); //Load the enviroment variables from .env file

import mysql from "mysql2"

import authRoutes from "./routes/auth.js"

const app = express()
app.use(express.json())
app.use(cors())


export const db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
})


db.connect((err) => {
  if (err) {
      console.log("ERROR: "+ err.message)
      return
  }
  console.log("Database connected!")
  // connection.release()
})

// Routes
app.use("/api/auth/", authRoutes)

// const port = 5000
app.listen(5066, () => {
    console.log("Server connected on port!:" + 5066)
})
