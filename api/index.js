import express from "express";
import dotenv from "dotenv";
dotenv.config() //Load the enviroment variables from .env file
import mysql from "mysql2"

const app = express()

app.use(express.json())


export const db = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
})

// Test the database connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Database connected!");
  // connection.release(); // Release the connection
});

app.listen(5066, () => {
    console.log("Connected!")
})
