
const express = require("express");
const router = express.Router();
const Bus = require("../models/Bus");

// Get all buses
router.get("/", async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add bus
router.post("/", async (req, res) => {
  try {
    const bus = await Bus.create(req.body);
    res.status(201).json(bus);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update bus
router.put("/:id", async (req, res) => {
  try {
    const bus = await Bus.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!bus) {
      return res.status(404).json({
        message: "Bus not found"
      });
    }

    res.json(bus);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete bus
router.delete("/:id", async (req, res) => {
  try {
    const bus = await Bus.findByIdAndDelete(req.params.id);

    if (!bus) {
      return res.status(404).json({
        message: "Bus not found"
      });
    }

    res.json({ message: "Bus deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
