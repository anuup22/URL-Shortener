import { getSessionId } from "../utils/auth.util.js";

async function restrictToAuthUser(req, res, next) {
    const token = req.cookies?.uid;
    if (!token) {
        return res.redirect('/login');
    }
    const user = getSessionId(token);
    if (!user) {
        return res.redirect('/login');
    }
    req.user = user;
    next();
}

async function checkAuthUser(req, res, next) {
    const token = req.cookies?.uid;
    const user = getSessionId(token);
    
    req.user = user;
    next();
}

export {
    restrictToAuthUser,
    checkAuthUser
}