const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  endpoint: { type: String, required: true },
  status: { type: String, default: "active" },
});

module.exports = mongoose.model("Service", serviceSchema);
