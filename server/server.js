import express from "express";
import cors from "cors";

const app = express();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.json({ message: "Hello from Express backend!" });
});

// Products route (later connect to artworks.json or DB)
app.get("/products", (req, res) => {
    res.json([
        { id: 1, title: "Starry Night", artist: "Vincent Van Gogh" },
        { id: 2, title: "Mona Lisa", artist: "Leonardo da Vinci" },
        { id: 3, title: "Amazon", artist: "Leonardo da Vinci" },
    ]);
});

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
