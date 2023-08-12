import express from "express";
import { config } from "dotenv";
config(); //Load the enviroment variables from .env file
import { db } from "./db.js";

const app = express()

app.use(express.json())


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
