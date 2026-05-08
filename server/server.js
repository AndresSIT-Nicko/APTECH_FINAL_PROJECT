const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://Nicko:nickoandres123@cluster0.ua1tqbj.mongodb.net/apptech?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connected"))
  .catch(console.error);

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
});

const User = mongoose.model("registration", userSchema, registration);

app.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.json({
      message: "User registered successfully",
      user,
    });

  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});