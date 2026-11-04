
const express = require("express");
const router = express.Router();
const Route = require("../models/Route");

// Get all routes with bus details
router.get("/", async (req, res) => {
  try {
    const routes = await Route.find().populate("bus");
    res.json(routes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add route
router.post("/", async (req, res) => {
  try {
    const route = await Route.create(req.body);
    const populatedRoute = await route.populate("bus");

    res.status(201).json(populatedRoute);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update route
router.put("/:id", async (req, res) => {
  try {
    const route = await Route.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate("bus");

    if (!route) {
      return res.status(404).json({
        message: "Route not found"
      });
    }

    res.json(route);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete route
router.delete("/:id", async (req, res) => {
  try {
    const route = await Route.findByIdAndDelete(req.params.id);

    if (!route) {
      return res.status(404).json({
        message: "Route not found"
      });
    }

    res.json({ message: "Route deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
