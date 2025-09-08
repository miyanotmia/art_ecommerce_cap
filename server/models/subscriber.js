import mongoose from "mongoose";


const subscriberSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true, unique: true,},
    dateSubscribed: {type:Date, default: Date.now}
});

export default mongoose.model("Subscriber", subscriberSchema);