import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    title: String,
    artist: String,
    price: Number,
    image: String
});

export default mongoose.model("Product", productSchema);