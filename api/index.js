import express from "express";

import dotenv from "dotenv";
dotenv.config({path: '.env'}); //Load the enviroment variables from .env file

import mysql from "mysql2"


const app = express()
app.use(express.json())


const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

db.connect((err, connecttion) => {
  if (err) {
      console.log("ERROR: "+ err.message)
      return
  }
  console.log("Connection established!")
  // connection.release()
})


app.listen(5064, () => {
    console.log("Connected!")
})
