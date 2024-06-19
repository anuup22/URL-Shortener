import User from "../models/user.model.js";
import { setUser } from "../utils/auth.util.js";

async function signupUser(req, res) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({
            status: "error",
            message: "All fields are required"
        });
    }
    await User.create({ name, email, password });
    return res.status(201).redirect('/');
}

async function loginUser(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            status: "error",
            message: "All fields are required"
        });
    }
    const user = await User.findOne({ email, password });
    if (!user) {
        return res.render('login', {
            message: "Invalid credentials"
        });
    }
    const token = setUser(user);
    res.cookie('uid', token)

    return res.redirect('/');
}

export {
    signupUser,
    loginUser,
};