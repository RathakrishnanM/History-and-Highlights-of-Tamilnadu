const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./Models/UserModel");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/crud");
const db = mongoose.connection;

db.on("connected", () => {
  console.log("DB connected");
});
db.on("error", () => {
  console.log("Something went wrong");
});

app.post("/user", (req, res) => {
  console.log("Received request:", req.body); // Add this line to see what data is being received
  userModel
    .create(req.body)
    .then((user) => {
      console.log("User created:", user);
      res.json(user);
    })
    .catch((err) => {
      console.error("Error creating user:", err);
      res.status(500).json({ error: err.message });
    });
});

app.listen("3000", () => {
  console.log("Server is running...");
});
