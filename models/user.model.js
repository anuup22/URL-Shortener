import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: "NORMAL",
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;