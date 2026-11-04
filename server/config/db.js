const mysql = require("mysql2/promise");
require("dotenv").config();

const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "bus_tracking",
    waitForConnections: true,
    connectionLimit: 10
});

module.exports = db;