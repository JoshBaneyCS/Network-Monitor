const express = require("express");
const Service = require("../models/service");

const router = express.Router();

router.post("/add", async (req, res) => {
  const { name, endpoint } = req.body;
  const service = new Service({ name, endpoint });
  await service.save();
  res.status(201).send("Service added");
});

module.exports = router;
