// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Contact = require("./models/Contact"); // <- ensure this path is correct

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI missing in backend .env — set it and restart.");
  process.exit(1);
}

// Middlewares
// app.use(express.json({ limit: "50kb" }));
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://stockdaddylucknow.com",
//       "https://www.stockdaddylucknow.com",
//     ],
//     methods: ["GET", "POST", "OPTIONS"],
//   })
// );

app.use(express.json({ limit: "50kb" }));
const allowedOrigins = [
  "http://localhost:5173",
  "https://stockdaddylucknow.com",
  "https://www.stockdaddylucknow.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (Postman, curl, health checks)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false,
  })
);

// 🔥 VERY IMPORTANT (preflight fix)
app.options("*", cors());

// Health check
app.get("/", (req, res) =>
  res.json({ ok: true, time: new Date().toISOString() })
);

// POST /api/contacts -> save contact
app.post("/api/contacts", async (req, res) => {
  try {
    const { name, email, contact, whatsapp, address, query } = req.body;

    // Basic validation — match what frontend expects
    if (!name || !email || !contact || !query) {
      return res
        .status(400)
        .json({ message: "name, email, contact and query are required" });
    }

    const saved = await Contact.create({
      name,
      email,
      contact,
      whatsapp,
      address,
      query,
    });

    return res.status(201).json({ message: "Saved", id: saved._id });
  } catch (err) {
    console.error("Error in /api/contacts:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });
