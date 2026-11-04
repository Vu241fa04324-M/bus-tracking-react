const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema({
  routeName: {
    type: String,
    required: true
  },
  bus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bus",
    required: true
  },
  startPoint: {
    type: String,
    required: true
  },
  endPoint: {
    type: String,
    required: true
  },
  stops: [{
    stopName: {
      type: String,
      required: true
    },
    arrivalTime: String,
    departureTime: String
  }]
}, { timestamps: true });

module.exports = mongoose.model("Route", routeSchema);