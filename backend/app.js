const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
require("dotenv").config();

// Routes
const adminRoutes = require("./routes/admin");
const publicRoutes = require("./routes/public");
const serviceRoutes = require("./routes/services");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Socket.io Real-Time
io.on("connection", (socket) => {
  console.log("User connected");
  socket.emit("update", { message: "Real-time updates active" });
});

// Routes
app.use("/admin", adminRoutes);
app.use("/api", publicRoutes);
app.use("/services", serviceRoutes);

// Start Server
server.listen(6969, () => {
  console.log("Server running on port 6969");
});
