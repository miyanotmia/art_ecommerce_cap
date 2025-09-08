import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
.connect(process.env.MONGO_URI)
.then(()=> console.log("Mongo Connected"))
.catch ((err)=> console.log("Mongo Error:", err));

//routes
app.get("/", (req, res) => {
    res.send("Backend is up and running");
});

import productRoutes from "./routes/products.js";
import subscriberRoutes from "./routes/subscribers.js";

app.use("/api/products", productRoutes);
app.use("/api/subscribers", subscriberRoutes);

//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


