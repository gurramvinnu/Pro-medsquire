import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection string (update with your real credentials)
const MONGO_URI =
  "mongodb+srv://sampleproject:Mongodb%40123@cluster0.aeenjlh.mongodb.net/Medsquire?retryWrites=true&w=majority";

// Check MongoDB connection
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB Atlas Connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    if (err.message.includes("bad auth")) {
      console.error(
        "❌ Authentication failed. Please check your username and password."
      );
    }
    process.exit(1); // Stop the server if DB connection fails
  });

// Schema & Model for 'student' collection
const studentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  message: String,
});
const Student = mongoose.model("student", studentSchema); // collection name: student

// API Endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.json({ success: true, message: "Message stored successfully!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Start Server
app.listen(5000, () =>
  console.log("🚀 Backend running at http://localhost:5000")
);
