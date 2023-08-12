import mysql from "mysql2"

export const db = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:"SISIII2023_89201041"
})

