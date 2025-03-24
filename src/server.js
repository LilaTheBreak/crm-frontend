const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

console.log("🚀 Starting backend server...");

// ✅ Allow multiple frontend origins (React apps on different ports)
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],  // ✅ Allows both frontend URLs
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

app.use(express.json());
console.log("✅ Middleware loaded successfully.");

// ✅ Google Client ID Route
app.get("/api/config", (req, res) => {
    console.log("📡 Received request for /api/config");
    res.json({ 
        googleClientId: "583250868510-r3e37u1i3udor8ctdo8p5s5o87qg3rol.apps.googleusercontent.com" 
    });
});

// ✅ Users Growth Route
app.get("/api/users/growth", (req, res) => {
    console.log("📡 Received request for /api/users/growth");
    res.json({ success: true, growthData: [10, 20, 30] });
});

// ✅ Health Check Route (For debugging)
app.get("/api/health", (req, res) => {
    res.json({ status: "✅ Backend is running" });
});

// ✅ Catch-all for undefined routes
app.use((req, res) => {
    console.error(`❌ 404 Not Found: ${req.originalUrl}`);
    res.status(404).json({ error: "Route not found" });
});

// ✅ Start the server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});











