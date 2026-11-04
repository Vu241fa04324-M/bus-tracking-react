
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// Test API
app.get("/", (req, res) => {
    res.send("Bus Tracking Backend Running!");
});

// Database API
app.get("/api/buses", async (req, res) => {
    try {
        const [buses] = await db.query(
            "SELECT * FROM buses"
        );

        res.json(buses);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to fetch buses"
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
