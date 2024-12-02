const express = require("express");
const Log = require("../models/log");

const router = express.Router();

router.get("/logs", async (req, res) => {
  const logs = await Log.find();
  res.send(logs);
});

module.exports = router;
