const express = require("express");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (!admin) return res.status(404).send("Admin not found");

  const isValid = await bcrypt.compare(password, admin.password);
  if (!isValid) return res.status(403).send("Invalid credentials");

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET);
  res.send({ token });
});

module.exports = router;
