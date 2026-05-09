const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb+srv://Nicko:nickoandres123@cluster0.ua1tqbj.mongodb.net/apptech?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Schema + Model
const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
});

const User = mongoose.model("registration", userSchema);

// Routes
app.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Error registering user", error: err.message });
  }
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
