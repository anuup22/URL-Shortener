import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        unique: true,
        required: true,
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    visits: [
        { timestamp: { type: Number } }
    ]
}, { timestamps: true });

const Url = mongoose.model("Url", urlSchema);

export default Url;